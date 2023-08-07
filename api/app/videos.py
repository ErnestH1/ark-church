import dropbox
from fastapi import APIRouter, Depends, HTTPException, File, UploadFile, Form
from sqlalchemy.orm import Session
from .database import get_db
from .models import Video
from .config import DROPBOX_ACCESS_TOKEN
import os

# Create a Dropbox client
client = dropbox.Dropbox(DROPBOX_ACCESS_TOKEN)

router = APIRouter(tags=["Videos"])

# Function to upload a file to Dropbox
def upload_file(file_path, destination_path):
    with open(file_path, 'rb') as file:
        response = client.files_upload(file.read(), destination_path)
        print(f"Uploaded {file_path} to Dropbox as {response.name}")

# Function to download a file from Dropbox
def download_file(dropbox_path, local_path):
    response = client.files_download_to_file(local_path, dropbox_path)
    print(f"Downloaded {dropbox_path} from Dropbox to {local_path}")

@router.post("/upload-video/", status_code=201)
def upload_video(file: UploadFile = File(...), title: str = Form(...), description: str = Form(...), db: Session = Depends(get_db)):
    destination_path = f"/Dropbox/Videos/{file.filename}"
    file_path = f"./uploaded_videos/{file.filename}"  # Save the video temporarily to the server
    
    # Create the directory if it doesn't exist
    os.makedirs(os.path.dirname(file_path), exist_ok=True)

    with open(file_path, 'wb') as local_file:
        local_file.write(file.file.read())  # Write the contents of the uploaded file to the local file

    upload_file(file_path, destination_path)

    # Remove the temporarily saved local file after uploading
    os.remove(file_path)

    video = Video(title=title, description=description, file_path=destination_path)
    db.add(video)
    db.commit()
    db.refresh(video)

    return {"message": "Video uploaded successfully", "data": video}

@router.put("/update-video/{video_id}")
def update_video(video_id: int, title: str = Form(None), description: str = Form(None), db: Session = Depends(get_db)):
    video = db.query(Video).filter(Video.id == video_id).first()
    if not video:
        raise HTTPException(status_code=404, detail="Video not found")

    if title:
        video.title = title
    if description:
        video.description = description

    db.commit()
    db.refresh(video)
    return {"message": "Video updated successfully", "data": video}

@router.delete("/videos/{video_id}")
def delete_video(video_id: int, db: Session = Depends(get_db)):
    video = db.query(Video).filter(Video.id == video_id).first()
    if not video:
        raise HTTPException(status_code=404, detail="Video not found")

    # Delete the video file from Dropbox
    try:
        client.files_delete_v2(video.file_path)
    except dropbox.exceptions.ApiError as e:
        # Handle the case when the file is not found on Dropbox
        if e.user_message_text.find("not_found") == -1:
            raise HTTPException(status_code=500, detail="Error deleting video from Dropbox")

    # Save a copy of the deleted video (optional)
    # download_file(video.file_path, f"./downloaded_videos/{video.title}.mp4")

    # Delete the video record from the database
    db.delete(video)
    db.commit()

    return {"message": "Video deleted successfully"}


@router.get("/list-videos/", status_code=200)
def list_videos(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    videos = db.query(Video).offset(skip).limit(limit).all()
    return {"data": videos}

@router.get("/download-video/{video_id}", status_code=200)
def download_video(video_id: int, db: Session = Depends(get_db)):
    video = db.query(Video).filter(Video.id == video_id).first()
    if not video:
        raise HTTPException(status_code=404, detail="Video not found")

    # Get the path to the user's "Downloads" directory
    downloads_dir = os.path.expanduser("~/Downloads")
    local_path = os.path.join(downloads_dir, f"{video.title}.mp4")

    download_file(video.file_path, local_path)

    return {"message": "Video downloaded successfully"}
