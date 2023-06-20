from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from app.auth.jwt_utils import create_access_token, verify_password
from app.database import get_db
from app.models import User
from sqlalchemy.orm import Session

router = APIRouter(tags=["Authentication"])


@router.post("/register")
def register(username: str, password: str, db: Session = Depends(get_db)):
    # Check if the username already exists
    user = db.query(User).filter(User.username == username).first()
    if user:
        raise HTTPException(status_code=400, detail="Username already exists")

    # Hash the password
    hashed_password = verify_password(password)

    # Create a new user
    new_user = User(username=username, password=hashed_password)
    db.add(new_user)
    db.commit()

    return {"message": "User registered successfully"}


@router.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    # Retrieve user from the database based on the provided username
    user = db.query(User).filter(User.username == form_data.username).first()

    # Check if the user exists and the provided password is correct
    if not user or not verify_password(form_data.password, user.password):
        raise HTTPException(status_code=400, detail="Invalid username or password")

    # Generate an access token
    access_token = create_access_token(user.id)

    # Return the access token
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/reset-password")
def reset_password(username: str, new_password: str, db: Session = Depends(get_db)):
    # Retrieve user from the database based on the provided username
    user = db.query(User).filter(User.username == username).first()

    # Check if the user exists
    if not user:
        raise HTTPException(status_code=400, detail="User not found")

 # Send email with password reset link (implementation specific to your application)

    # Hash the new password
    hashed_password = verify_password(new_password)

    # Update the user's password
    user.password = hashed_password
    db.commit()

 # Send email with password reset link (implementation specific to your application)

    return {"message": "Password reset successful"}


@router.post("/logout")
def logout():
    # Perform any necessary logout actions
    return {"message": "Logout successful"}
