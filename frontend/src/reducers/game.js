import {SETSTAT, SETIDPLAYER} from '../constances/actionTypes'

const game = (state = {stat:null, playerName:'', id:null}, action) => {
    switch (action.type) {
        case SETSTAT:    
            return {...state, stat: action.payload.data};
        case SETIDPLAYER:    
            return {...state, playerName: action.payload.playerName, id:action.payload.id};
        default:
            return state;
    }

}

export default game;