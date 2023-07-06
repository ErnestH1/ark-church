# from fastapi import APIRouter, Depends, File, UploadFile
# from sqlalchemy.orm import Session
# from typing import List

# from .models import Podcast
# from .database import get_db

# router = APIRouter(tags=["Podcasts"])

# @router.post("/podcasts")
# def create_podcast(
#     title: str,
#     description: str,
#     podcast_file: UploadFile = File(...),
#     db: Session = Depends(get_db)
# ):
#     file_path = f"uploads/{podcast_file.filename}"
#     with open(file_path, "wb") as file:
#         file.write(podcast_file.file.read())

#     podcast = Podcast(
#         title=title,
#         description=description,
#         file_path=file_path
#     )
#     db.add(podcast)
#     db.commit()
#     db.refresh(podcast)
#     return podcast


# @router.get("/podcasts/{podcast_id}")
# def get_podcast(podcast_id: int, db: Session = Depends(get_db)):
#     return db.query(Podcast).filter(Podcast.id == podcast_id).first()


# @router.put("/podcasts/{podcast_id}")
# def update_podcast(
#     podcast_id: int,
#     title: str = None,
#     description: str = None,
#     podcast_file: UploadFile = File(None),
#     db: Session = Depends(get_db)
# ):
#     podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
#     if not podcast:
#         return {"error": "Podcast not found"}

#     if podcast_file:
#         file_path = f"uploads/{podcast_file.filename}"
#         with open(file_path, "wb") as file:
#             file.write(podcast_file.file.read())
#         podcast.file_path = file_path

#     if title:
#         podcast.title = title
#     if description:
#         podcast.description = description

#     db.commit()
#     db.refresh(podcast)
#     return podcast


# @router.delete("/podcasts/{podcast_id}")
# def delete_podcast(podcast_id: int, db: Session = Depends(get_db)):
#     podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
#     if not podcast:
#         return {"error": "Podcast not found"}

#     db.delete(podcast)
#     db.commit()

#     return {"message": "Podcast deleted"}


# @router.get("/podcasts")
# def fetch_all_podcasts(db: Session = Depends(get_db)):
#     return db.query(Podcast).all()



from fastapi import APIRouter, Depends, File, UploadFile
from mega import Mega
from sqlalchemy.orm import Session
from typing import List

from .models import Podcast
from .database import get_db

router = APIRouter(tags=["Podcasts"])

mega = Mega()
m = mega.login(email, password)

@router.post("/podcasts")
def create_podcast(
    title: str,
    description: str,
    podcast_file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    # Upload file to Mega
    file_path = f"uploads/{podcast_file.filename}"
    m.upload(podcast_file.file, file_path)

    podcast = Podcast(
        title=title,
        description=description,
        file_path=file_path
    )
    db.add(podcast)
    db.commit()
    db.refresh(podcast)
    return podcast


@router.get("/podcasts/{podcast_id}")
def get_podcast(podcast_id: int, db: Session = Depends(get_db)):
    podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
    if not podcast:
        return {"error": "Podcast not found"}

    # Download file from Mega
    file_path = podcast.file_path
    m.download(file_path, f"downloads/{podcast_id}.mp3")

    return podcast


@router.put("/podcasts/{podcast_id}")
def update_podcast(
    podcast_id: int,
    title: str = None,
    description: str = None,
    podcast_file: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
    if not podcast:
        return {"error": "Podcast not found"}

    if podcast_file:
        # Upload new file to Mega
        file_path = f"uploads/{podcast_file.filename}"
        m.upload(podcast_file.file, file_path)
        podcast.file_path = file_path

    if title:
        podcast.title = title
    if description:
        podcast.description = description

    db.commit()
    db.refresh(podcast)
    return podcast


@router.delete("/podcasts/{podcast_id}")
def delete_podcast(podcast_id: int, db: Session = Depends(get_db)):
    podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
    if not podcast:
        return {"error": "Podcast not found"}

    # Delete file from Mega
    file_path = podcast.file_path
    m.delete(file_path)

    db.delete(podcast)
    db.commit()

    return {"message": "Podcast deleted"}


@router.get("/podcasts")
def fetch_all_podcasts(db: Session = Depends(get_db)):
    return db.query(Podcast).all()
