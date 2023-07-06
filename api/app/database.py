from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .models import User, PasswordReset, Video, Podcast,Base


DATABASE_URL = "sqlite:///ark-church.db"


engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Create the database tables
Base.metadata.create_all(bind=engine)
