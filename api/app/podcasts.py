import os
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
from app.models import Podcast
from app.database import get_db
from fastapi.responses import FileResponse

router = APIRouter(tags=["Podcasts"])

# Function to retrieve all podcasts
@router.get("/podcasts")
def get_podcasts(db: Session = Depends(get_db)):
    podcasts = db.query(Podcast).all()
    return podcasts

# Function to retrieve a single podcast by ID
@router.get("/podcasts/{podcast_id}")
def get_podcast(podcast_id: int, db: Session = Depends(get_db)):
    podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
    if not podcast:
        raise HTTPException(status_code=404, detail="Podcast not found")
    return podcast

# Function to create a new podcast
@router.post("/podcasts")
def create_podcast(
    podcast: UploadFile = File(...),
    title: str = Form(...),
    description: str = Form(...),
    db: Session = Depends(get_db),
):
    # Save the podcast file to disk
    extension = os.path.splitext(podcast.filename)[1]
    podcast_path = os.path.join("podcasts", f"{title}{extension}")
    with open(podcast_path, "wb") as f:
        f.write(podcast.file.read())

    # Create a Podcast object with the necessary metadata
    new_podcast = Podcast(title=title, description=description, file_path=podcast_path)
    db.add(new_podcast)
    db.commit()
    db.refresh(new_podcast)
    return new_podcast

# Function to update an existing podcast
@router.put("/podcasts/{podcast_id}")
def update_podcast(podcast_id: int, updated_podcast: Podcast, db: Session = Depends(get_db)):
    podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
    if not podcast:
        raise HTTPException(status_code=404, detail="Podcast not found")
    podcast.title = updated_podcast.title
    podcast.description = updated_podcast.description
    db.commit()
    return {"message": "Podcast updated successfully"}

# Function to delete a podcast
@router.delete("/podcasts/{podcast_id}")
def delete_podcast(podcast_id: int, db: Session = Depends(get_db)):
    podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
    if not podcast:
        raise HTTPException(status_code=404, detail="Podcast not found")
    db.delete(podcast)
    db.commit()
    return {"message": "Podcast deleted successfully"}

# Function to download a podcast
@router.get("/podcasts/{podcast_id}/download")
def download_podcast(podcast_id: int, db: Session = Depends(get_db)):
    podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
    if not podcast:
        raise HTTPException(status_code=404, detail="Podcast not found")

    # Read the podcast file contents from the database or storage
    with open(podcast.file_path, "rb") as f:
        file_content = f.read()

    # Determine the appropriate media type based on the file extension
    extension = os.path.splitext(podcast.file_path)[1]
    if extension == ".mp3":
        media_type = "audio/mpeg"
    elif extension == ".wav":
        media_type = "audio/wav"
    else:
        media_type = "application/octet-stream"

    return FileResponse(podcast.file_path, media_type=media_type, filename=podcast.title + extension)
