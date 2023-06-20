from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from pydantic import BaseModel, Field

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id: int = Column(Integer, primary_key=True, index=True)
    username: str = Column(String, unique=True, index=True)
    password: str = Column(String)

class PasswordReset(Base):
    __tablename__ = "password_resets"

    id: int = Column(Integer, primary_key=True, index=True)
    email: str = Column(String, unique=True, index=True)
    token: str = Column(String)

class Video(BaseModel):
    id: int = Field(..., title="Video ID")
    title: str = Field(..., title="Video Title")
    description: str = Field(..., title="Video Description")


class Podcast(BaseModel):
    __tablename__ = "podcasts"

    id: int = Field(..., title="Podcast ID")
    title: str = Field(..., title="Podcast Title")
    description: str = Field(..., title="Podcast Description")
    file_path: str = Field(..., title="Podcast File Path")
