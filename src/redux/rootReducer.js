import { SET_CURRENT_CHANNEL, CLEAR_CHANNEL } from 'redux/actions/channel-actions';
import { PLAY_VIDEO } from 'redux/actions/player-actions';

const defaultState = {
  currentChannel: { },
  currentPlaying: { }
}

function rootReducer(state = defaultState, action){

  switch(action.type){

    case SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload
      }

    case CLEAR_CHANNEL:
      return {
        ...state,
        currentChannel: {}
      }

    case PLAY_VIDEO:
      return {
        ...state,
        currentPlaying: action.payload
      }

    default: return state
  }
}

export default rootReducer;