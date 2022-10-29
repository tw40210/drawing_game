from fastapi import APIRouter
from ..py_libs.controllers import picGameController
from ..py_libs.objects import GerneralObj
import time
import asyncio
import logging

router = APIRouter()
simple_room = GerneralObj.GamingRoom(0)
simple_start_flag = False
cur_game_obj = None


@router.get("/SubmitPic")
def submit_pic(player: str, label: str, pic: str):
    res = cur_game_obj.submit_pic(player, pic)
    return {"data":res}

@router.get("/CheckNextRound")
async def check_next(round: str):
    round = int(round)
    res = cur_game_obj.check_next_turn(round)
    while res is None:
        await asyncio.sleep(0.5)
        res = cur_game_obj.check_next_turn(round)
        logging.info(res)
    return {"data":res}

@router.get("/CreateRoom")
def create_room(username: str):
    return {"username": username}

@router.get("/JoinRoom")
def join_room(username: str):
    return {"username": username}

@router.get("/SimpleJoinRoom")
def simple_join_room(player: str):
    simple_room.join(player)

    return {"data": [simple_room.room_id, simple_room.players], "id": len(simple_room.players)-1}

@router.get("/SimpleCheckRoomStart")
def simple_check_room_start():

    return {"status": simple_start_flag}
@router.get("/SimpleStart")
async def simple_start():
    global cur_game_obj
    global simple_start_flag

    if simple_start_flag:
        pass
    else:
        cur_game_obj = simple_room.start()
        simple_start_flag=True

    return {"status": 1, "data":cur_game_obj.data}
@router.get("/SimpleReset")
async def simple_start():
    global cur_game_obj
    global simple_start_flag
    global simple_room

    cur_game_obj = None
    simple_start_flag=False
    simple_room = GerneralObj.GamingRoom(0)

    return {"status": 1}



