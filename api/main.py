from fastapi import FastAPI, WebSocket
from app.chat import websocket_endpoint
from app.auth.authenticate import router as auth_router
from app.auth.jwt_utils import verify_token
from app.videos import router as videos_router
from app.podcasts import router as podcasts_router

app = FastAPI()

# Include your API routers
app.include_router(auth_router, prefix="/api")
app.include_router(podcasts_router, prefix="/api")
app.include_router(videos_router, prefix="/api")

@app.websocket("/ws")
async def websocket_route(websocket: WebSocket):
    await websocket_endpoint(websocket)

# ... other imports and code ...

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
