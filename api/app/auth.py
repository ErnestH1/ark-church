import random
import string
import hashlib
from fastapi import Request, HTTPException, status
from fastapi.responses import RedirectResponse

# Function to generate a random code verifier for PKCE
def generate_code_verifier(length: int = 64):
    characters = string.ascii_letters + string.digits + "-._~"
    return "".join(random.choices(characters, k=length))

# Function to create a code challenge from the code verifier
def create_code_challenge(code_verifier: str):
    code_challenge = hashlib.sha256(code_verifier.encode()).digest()
    return code_challenge

# Function to initiate the OAuth 2.0 Authorization Code Flow with PKCE
def authorize_dropbox(request: Request):
    # Generate a random code verifier and create a code challenge
    code_verifier = generate_code_verifier()
    code_challenge = create_code_challenge(code_verifier)

    # Save the code verifier to be used in the token exchange
    # You should store this securely (e.g., in the database) for later use
    # For simplicity, we'll just store it in the session for this example
    request.session["code_verifier"] = code_verifier

    # Construct the authorization URL
    authorize_url = f"https://www.dropbox.com/oauth2/authorize?client_id=<secret key>&response_type=code&code_challenge={code_challenge}&code_challenge_method=S256&redirect_uri=https://ark-church-chi.vercel.app/"

    # Redirect the user to the Dropbox authorization page
    return RedirectResponse(authorize_url)
