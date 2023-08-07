import dropbox
from fastapi import APIRouter, Depends, HTTPException, File, UploadFile, Form
from sqlalchemy.orm import Session
from .database import get_db
from .models import Podcast
from .config import DROPBOX_ACCESS_TOKEN
from pathlib import Path
import os

# Create a Dropbox client
client = dropbox.Dropbox(DROPBOX_ACCESS_TOKEN)

router = APIRouter(tags=["Podcasts"])

# Function to upload a file to Dropbox
def upload_file(file_path, destination_path):
    with open(file_path, 'rb') as file:
        response = client.files_upload(file.read(), destination_path)
        print(f"Uploaded {file_path} to Dropbox as {response.name}")

# Function to download a file from Dropbox
def download_file(dropbox_path, local_path):
    response = client.files_download_to_file(local_path, dropbox_path)
    print(f"Downloaded {dropbox_path} from Dropbox to {local_path}")

@router.post("/upload-podcast/", status_code=201)
def upload_podcast(file: UploadFile = File(...), title: str = Form(...), description: str = Form(...), db: Session = Depends(get_db)):
    destination_path = f"/Dropbox/Podcasts/{file.filename}"
    file_path = f"./uploaded_podcasts/{file.filename}"  # Save the podcast temporarily to the server
    
    # Create the directory if it doesn't exist
    os.makedirs(os.path.dirname(file_path), exist_ok=True)

    with open(file_path, 'wb') as local_file:
        local_file.write(file.file.read())  # Write the contents of the uploaded file to the local file

    upload_file(file_path, destination_path)

    # Remove the temporarily saved local file after uploading
    os.remove(file_path)

    podcast = Podcast(title=title, description=description, file_path=destination_path)
    db.add(podcast)
    db.commit()
    db.refresh(podcast)

    return {"message": "Podcast uploaded successfully", "data": podcast}

@router.put("/update-podcast/{podcast_id}")
def update_podcast(podcast_id: int, title: str = Form(None), description: str = Form(None), db: Session = Depends(get_db)):
    podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
    if not podcast:
        raise HTTPException(status_code=404, detail="Podcast not found")

    if title:
        podcast.title = title
    if description:
        podcast.description = description

    db.commit()
    db.refresh(podcast)
    return {"message": "Podcast updated successfully", "data": podcast}

@router.delete("/podcasts/{podcast_id}")
def delete_podcast(podcast_id: int, db: Session = Depends(get_db)):
    podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
    if not podcast:
        raise HTTPException(status_code=404, detail="Podcast not found")

    # Delete the podcast file from Dropbox
    try:
        client.files_delete_v2(podcast.file_path)
    except dropbox.exceptions.ApiError as e:
        # Handle the case when the file is not found on Dropbox
        if e.user_message_text.find("not_found") == -1:
            raise HTTPException(status_code=500, detail="Error deleting podcast from Dropbox")

    # Save a copy of the deleted podcast (optional)
    # download_file(podcast.file_path, f"./downloaded_podcasts/{podcast.title}.mp3")

    # Delete the podcast record from the database
    db.delete(podcast)
    db.commit()

    return {"message": "Podcast deleted successfully"}


@router.get("/list-podcasts/", status_code=200)
def list_podcasts(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    podcasts = db.query(Podcast).offset(skip).limit(limit).all()
    return {"data": podcasts}

@router.get("/download-podcast/{podcast_id}", status_code=200)
def download_podcast(podcast_id: int, db: Session = Depends(get_db)):
    podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
    if not podcast:
        raise HTTPException(status_code=404, detail="Podcast not found")

    # Get the path to the user's "Downloads" directory
    downloads_dir = os.path.expanduser("~/Downloads")
    local_path = os.path.join(downloads_dir, f"{podcast.title}.mp3")

    download_file(podcast.file_path, local_path)

    return {"message": "Podcast downloaded successfully"}
