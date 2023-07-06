
from fastapi import APIRouter, Depends, File, UploadFile
from mega import Mega
from sqlalchemy.orm import Session
import os
import mimetypes
import tempfile


from .models import Podcast
from .database import get_db
from .storage import email, password

router = APIRouter(tags=["Podcasts"])

ALLOWED_EXTENSIONS = ['.m4a', '.flac', '.mp3', '.wav', '.aac']

@router.post("/podcasts")
def create_podcast(
    title: str,
    description: str,
    podcast_file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    # Get the file extension
    file_extension = os.path.splitext(podcast_file.filename)[1]

    # Check if the file extension is allowed
    if file_extension.lower() not in ALLOWED_EXTENSIONS:
        return {"error": "Invalid file type. Only M4A, FLAC, MP3, WAV, and AAC files are allowed."}

    # Save the uploaded file to a temporary location
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        temp_file.write(podcast_file.file.read())
        temp_file_path = temp_file.name

    # Upload the file to Mega
    mega = Mega()
    m = mega.login(email, password)
    m.upload(temp_file_path)

    # Remove the temporary file
    os.remove(temp_file_path)

    # Create the podcast record in the database
    podcast = Podcast(
        title=title,
        description=description,
        file_path=podcast_file.filename  # Store the filename as the file path
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
    m = Mega()
    try:
        m.login(email, password)  # Login to the Mega account
        file_link = m.find(podcast.file_path)
        if file_link:
            m.download(file_link, f"downloads/{podcast_id}.mp3")
            return podcast
        else:
            return {"error": "File not found on Mega"}
    except Exception as e:
        return {"error": f"Mega API error: {str(e)}"}



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
        m = Mega()
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
    m = Mega()
    m.delete(file_path)

    db.delete(podcast)
    db.commit()

    return {"message": "Podcast deleted"}


@router.get("/podcasts")
def fetch_allpodcasts(db: Session = Depends(get_db)):
    return db.query(Podcast).all()


# from fastapi import APIRouter, Depends, File, UploadFile
# from mega import Mega
# from sqlalchemy.orm import Session
# import os
# import mimetypes
# import tempfile

# from .models import Podcast
# from .database import get_db
# from .storage import email, password

# router = APIRouter(tags=["Podcasts"])

# ALLOWED_EXTENSIONS = ['.m4a', '.flac', '.mp3', '.wav', '.aac']

# @router.post("/podcasts")
# def create_podcast(
#     title: str,
#     description: str,
#     podcast_file: UploadFile = File(...),
#     db: Session = Depends(get_db)
# ):
#     # Get the file extension
#     file_extension = os.path.splitext(podcast_file.filename)[1]

#     # Check if the file extension is allowed
#     if file_extension.lower() not in ALLOWED_EXTENSIONS:
#         return {"error": "Invalid file type. Only M4A, FLAC, MP3, WAV, and AAC files are allowed."}

#     # Save the uploaded file to a temporary location
#     with tempfile.NamedTemporaryFile(delete=False) as temp_file:
#         temp_file.write(podcast_file.file.read())
#         temp_file_path = temp_file.name

#     # Upload the file to Mega
#     mega = Mega()
#     m = mega.login(email, password)
#     mega_file = m.upload(temp_file_path)

#     # Remove the temporary file
#     os.remove(temp_file_path)

#     # Create the podcast record in the database
#     podcast = Podcast(
#         title=title,
#         description=description,
#         file_id=mega_file.get('h'),  # Store the Mega file ID
#         file_name=podcast_file.filename  # Store the original file name
#     )
#     db.add(podcast)
#     db.commit()
#     db.refresh(podcast)
#     return podcast


# @router.get("/podcasts/{podcast_id}")
# def get_podcast(podcast_id: int, db: Session = Depends(get_db)):
#     podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
#     if not podcast:
#         return {"error": "Podcast not found"}

#     # Download file from Mega
#     m = Mega()
#     try:
#         m.login(email, password)  # Login to the Mega account
#         file_link = m.get_upload_link(podcast.file_id)
#         if file_link:
#             return {"podcast": podcast, "file_link": file_link}
#         else:
#             return {"error": "File not found on Mega"}
#     except Exception as e:
#         return {"error": f"Mega API error: {str(e)}"}


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
#         # Upload new file to Mega
#         mega = Mega()
#         m = mega.login(email, password)
#         mega_file = m.upload(podcast_file.file)
#         podcast.file_id = mega_file.get('h')  # Update the Mega file ID

#     if title:
#         podcast.title = title
#     if description:
#         podcast.description = description

#     db.commit()
#     db.refresh(podcast)
#     return podcast


# @router.delete("/podcasts/{podcast_id}")
# def delete_podcast(podcast_id, db: Session = Depends(get_db)):
#     podcast = db.query(Podcast).filter(Podcast.id == podcast_id).first()
#     if not podcast:
#         return {"error": "Podcast not found"}

#     # Delete file from Mega
#     m = Mega()
#     try:
#         m.login(email, password)  # Login to the Mega account
#         m.delete(podcast.file_id)
#     except Exception as e:
#         return {"error": f"Mega API error: {str(e)}"}

#     db.delete(podcast)
#     db.commit()

#     return {"message": "Podcast deleted"}


# @router.get("/podcasts")
# def fetch_all_podcasts(db: Session = Depends(get_db)):
#     return db.query(Podcast).all()
