# from sqlalchemy.orm import Session
# from fastapi import UploadFile
# import os
# from typing import List
# from fastapi import APIRouter
# from .database import get_db
# from .models import Video
# from pydantic import BaseModel
# from fastapi import Depends


# router = APIRouter(tags=["Videos"])


# class VideoCreate(BaseModel):
#     title: str
#     description: str


# class VideoUpdate(BaseModel):
#     title: str
#     description: str


# class VideoResponse(BaseModel):
#     id: int
#     title: str
#     description: str


# @router.post("/videos", response_model=VideoResponse)
# def create_video(video: VideoCreate, video_file: UploadFile, db: Session = Depends(get_db)) -> VideoResponse:
#     video_db = Video(title=video.title, description=video.description)
#     db.add(video_db)
#     db.commit()
#     db.refresh(video_db)

#     # Save video file
#     save_video_file(video_file, video_db.id)

#     return VideoResponse(id=video_db.id, title=video_db.title, description=video_db.description)


# @router.get("/videos/{video_id}", response_model=VideoResponse)
# def get_video(video_id: int, db: Session = Depends(get_db)) -> VideoResponse:
#     video_db = db.query(Video).filter(Video.id == video_id).first()
#     if not video_db:
#         return {"message": "Video not found"}

#     return VideoResponse(id=video_db.id, title=video_db.title, description=video_db.description)


# @router.put("/videos/{video_id}", response_model=VideoResponse)
# def update_video(video_id: int, video: VideoUpdate, db: Session = Depends(get_db)) -> VideoResponse:
#     video_db = db.query(Video).filter(Video.id == video_id).first()
#     if not video_db:
#         return {"message": "Video not found"}

#     if video.title:
#         video_db.title = video.title
#     if video.description:
#         video_db.description = video.description

#     db.commit()
#     db.refresh(video_db)

#     return VideoResponse(id=video_db.id, title=video_db.title, description=video_db.description)


# @router.delete("/videos/{video_id}")
# def delete_video(video_id: int, db: Session = Depends(get_db)):
#     video_db = db.query(Video).filter(Video.id == video_id).first()
#     if not video_db:
#         return {"message": "Video not found"}

#     db.delete(video_db)
#     db.commit()
#     delete_video_file(video_db.id)


# @router.get("/videos", response_model=List[VideoResponse])
# def fetch_all_videos(db: Session = Depends(get_db)) -> List[VideoResponse]:
#     videos = db.query(Video).all()
#     return [
#         VideoResponse(id=video.id, title=video.title, description=video.description)
#         for video in videos
#     ]


# def save_video_file(video_file: UploadFile, video_id: int):
#     # Adjust the file save path and logic according to your requirements
#     file_path = f"videos/{video_id}.mp4"
#     with open(file_path, "wb") as file:
#         file.write(video_file.file.read())


# def delete_video_file(video_id: int):
#     # Adjust the file delete logic according to your requirements
#     file_path = f"videos/{video_id}.mp4"
#     if os.path.exists(file_path):
#         os.remove(file_path)


from sqlalchemy.orm import Session
from mega import Mega
from fastapi import UploadFile
import os
from typing import List
from fastapi import APIRouter
from .database import get_db
from .models import Video
from pydantic import BaseModel
from fastapi import Depends
from .storage import email,password


router = APIRouter(tags=["Videos"])

mega = Mega()
m = mega.login(email, password)


class VideoCreate(BaseModel):
    title: str
    description: str


class VideoUpdate(BaseModel):
    title: str
    description: str


class VideoResponse(BaseModel):
    id: int
    title: str
    description: str


@router.post("/videos", response_model=VideoResponse)
def create_video(video: VideoCreate, video_file: UploadFile, db: Session = Depends(get_db)) -> VideoResponse:
    video_db = Video(title=video.title, description=video.description)
    db.add(video_db)
    db.commit()
    db.refresh(video_db)

    # Upload video file to Mega
    file_path = f"videos/{video_db.id}.mp4"
    m.upload(video_file.file, file_path)

    return VideoResponse(id=video_db.id, title=video_db.title, description=video_db.description)


@router.get("/videos/{video_id}", response_model=VideoResponse)
def get_video(video_id: int, db: Session = Depends(get_db)) -> VideoResponse:
    video_db = db.query(Video).filter(Video.id == video_id).first()
    if not video_db:
        return {"message": "Video not found"}

    # Download video file from Mega
    file_path = f"videos/{video_id}.mp4"
    m.download(file_path, f"downloads/{video_id}.mp4")

    return VideoResponse(id=video_db.id, title=video_db.title, description=video_db.description)


@router.put("/videos/{video_id}", response_model=VideoResponse)
def update_video(video_id: int, video: VideoUpdate, db: Session = Depends(get_db)) -> VideoResponse:
    video_db = db.query(Video).filter(Video.id == video_id).first()
    if not video_db:
        return {"message": "Video not found"}

    if video.title:
        video_db.title = video.title
    if video.description:
        video_db.description = video.description

    db.commit()
    db.refresh(video_db)

    return VideoResponse(id=video_db.id, title=video_db.title, description=video_db.description)


@router.delete("/videos/{video_id}")
def delete_video(video_id: int, db: Session = Depends(get_db)):
    video_db = db.query(Video).filter(Video.id == video_id).first()
    if not video_db:
        return {"message": "Video not found"}

    db.delete(video_db)
    db.commit()

    # Delete video file from Mega
    file_path = f"videos/{video_id}.mp4"
    m.delete(file_path)


@router.get("/videos", response_model=List[VideoResponse])
def fetch_all_videos(db: Session = Depends(get_db)) -> List[VideoResponse]:
    videos = db.query(Video).all()
    return [
        VideoResponse(id=video.id, title=video.title, description=video.description)
        for video in videos
    ]
