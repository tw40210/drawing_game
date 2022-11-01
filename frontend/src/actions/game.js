import {SETSTAT, SETIDPLAYER} from '../constances/actionTypes'
import { SimpleCheck, SimpleStart, SimpleReset, SimpleJoin, CheckNextRound ,SubmitPic} from "../api";
import { sleep } from '../utils/utils';

export const startGame = () => async (dispatch) => {

    try {
        const {data} = await SimpleStart();
        dispatch({type: SETSTAT, payload: {data: data.gameStatus}});
    } catch (error) {
        console.log(error.message); 
    }

}

export const joinGame = (playerName) => async (dispatch) => {

    try {
        const {data} =await SimpleJoin(playerName);
        dispatch({type: SETIDPLAYER, payload: {playerName, id:data.id}});
    } catch (error) {
        console.log(error.message); 
    }

}

export const updatePicGame = (round, room, playerName, picData) => async (dispatch) => {

    try {
        await SubmitPic(room, playerName, picData);

        let res = await (await CheckNextRound(round)).data;
        console.log(res)

        while (res.data===-1){
            await sleep(1000);
            res = await (await CheckNextRound(round)).data;
            console.log(res)
        }
        dispatch({type: SETSTAT, payload: {data:res.data}});

    } catch (error) {
        console.log(error.message); 
    }

}
