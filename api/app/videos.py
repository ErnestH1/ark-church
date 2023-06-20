import os
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
from app.models import Video
from app.database import get_db
from fastapi.responses import FileResponse

router = APIRouter(tags=["Videos"])

# Function to retrieve all videos
@router.get("/videos")
def get_videos(db: Session = Depends(get_db)):
    videos = db.query(Video).all()
    return videos

# Function to retrieve a single video by ID
@router.get("/videos/{video_id}")
def get_video(video_id: int, db: Session = Depends(get_db)):
    video = db.query(Video).filter(Video.id == video_id).first()
    if not video:
        raise HTTPException(status_code=404, detail="Video not found")
    return video

# Function to create a new video
@router.post("/videos")
def create_video(
    video: UploadFile = File(...),
    title: str = Form(...),
    description: str = Form(...),
    db: Session = Depends(get_db),
):
    # Generate a unique filename based on title
    filename = f"{title}.mp4"
    video_path = os.path.join("videos", filename)

    # Save the video file to disk
    with open(video_path, "wb") as f:
        f.write(video.file.read())

    # Create a Video object with the necessary metadata
    new_video = Video(title=title, description=description, file_path=video_path)
    db.add(new_video)
    db.commit()
    db.refresh(new_video)
    return new_video

# Function to update an existing video
@router.put("/videos/{video_id}")
def update_video(video_id: int, updated_video: Video, db: Session = Depends(get_db)):
    video = db.query(Video).filter(Video.id == video_id).first()
    if not video:
        raise HTTPException(status_code=404, detail="Video not found")
    video.title = updated_video.title
    video.description = updated_video.description
    db.commit()
    return {"message": "Video updated successfully"}

# Function to delete a video
@router.delete("/videos/{video_id}")
def delete_video(video_id: int, db: Session = Depends(get_db)):
    video = db.query(Video).filter(Video.id == video_id).first()
    if not video:
        raise HTTPException(status_code=404, detail="Video not found")
    db.delete(video)
    db.commit()
    return {"message": "Video deleted successfully"}

# Function to download a video
@router.get("/videos/{video_id}/download")
def download_video(video_id: int, db: Session = Depends(get_db)):
    video = db.query(Video).filter(Video.id == video_id).first()
    if not video:
        raise HTTPException(status_code=404, detail="Video not found")
    
    # Read the video file contents from the database or storage
    with open(video.file_path, "rb") as f:
        file_content = f.read()

    return FileResponse(video.file_path, media_type="video/mp4", filename=video.title + ".mp4")
