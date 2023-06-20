import websockets

async def websocket_endpoint(websocket: websockets.WebSocketServerProtocol, path: str):
    await websocket.accept()
    while True:
        message = await websocket.recv()
        await websocket.send(f"Received message: {message}")
