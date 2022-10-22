from fastapi import APIRouter
from ..py_libs.controllers import picGameController

router = APIRouter()



@router.post("/SubmitPic")
async def submit_pic(username: str):
    return {"username": username}

@router.get("/CreateRoom")
async def create_room(username: str):
    gaming_room = 
    return {"username": username}

@router.get("/JoinRoom")
async def join_room(username: str):
    return {"username": username}