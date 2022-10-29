import {SETSTAT, SETIDPLAYER} from '../constances/actionTypes'
import { SimpleCheck, SimpleStart, SimpleReset, SimpleJoin } from "../api";

export const startGame = () => async (dispatch) => {

    try {
        const {data} = await SimpleStart();
        dispatch({type: SETSTAT, payload: {data}});
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

export const updatePicGame = (gameObj) => async (dispatch) => {

    try {
        const {data} = await SimpleStart();
        // dispatch({type: SETUP, payload: {data}});
    } catch (error) {
        console.log(error.message); 
    }

}