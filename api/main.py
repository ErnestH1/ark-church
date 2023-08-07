import random
import string
import hashlib
from fastapi import FastAPI, WebSocket, Request, HTTPException
from fastapi.responses import RedirectResponse, HTMLResponse
from fastapi.templating import Jinja2Templates
from app.chat import websocket_endpoint
from app.videos import router as videos_router
from app.podcasts import router as podcasts_router
from app.auth import authorize_dropbox, refresh_access_token

app = FastAPI()
templates = Jinja2Templates(directory="templates")

# Include your API routers
app.include_router(podcasts_router, prefix="/api")
app.include_router(videos_router, prefix="/api")

@app.websocket("/ws")
async def websocket_route(websocket: WebSocket):
    await websocket_endpoint(websocket)

# Callback endpoint to handle the redirect from Dropbox
@app.get("/callback/", response_class=HTMLResponse)
async def dropbox_callback(code: str, request: Request):
    # Check if the code_verifier is stored in the session
    code_verifier = request.session.get("code_verifier")
    if not code_verifier:
        raise HTTPException(status_code=400, detail="Missing code_verifier")

    # Use the code and code_verifier to request the access token from Dropbox
    # Perform the token exchange here using /oauth2/token endpoint
    access_token, refresh_token, expires_in = refresh_access_token(code, code_verifier)

    # Set the access token and refresh token in the session (or store them securely)
    request.session["access_token"] = access_token
    request.session["refresh_token"] = refresh_token

    # Redirect the user to the dashboard or any authenticated page
    return RedirectResponse(url="/dashboard/")

# Protected endpoint that requires authentication
@app.get("/dashboard/", response_class=HTMLResponse)
async def dashboard(request: Request):
    # Check if the access token is present in the session
    access_token = request.session.get("access_token")
    if not access_token:
        # If access token is missing, redirect to the Dropbox authorization page
        return authorize_dropbox(request)

    # Check if the access token has expired
    expires_in = request.session.get("expires_in")
    if not expires_in or expires_in <= 0:
        # If the access token has expired, refresh it using the refresh token
        refresh_token = request.session.get("refresh_token")
        if not refresh_token:
            # If the refresh token is missing, redirect to the Dropbox authorization page
            return authorize_dropbox(request)

        # Refresh the access token using the refresh token
        access_token, refresh_token, expires_in = refresh_access_token(None, None, refresh_token=refresh_token)

        # Update the session with the new access token and expiration time
        request.session["access_token"] = access_token
        request.session["refresh_token"] = refresh_token
        request.session["expires_in"] = expires_in

    # Use the access token to make API requests to Dropbox or perform any actions
    # ...

    # Render the dashboard template (assuming you have a dashboard.html template)
    return templates.TemplateResponse("dashboard.html", {"request": request})

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
