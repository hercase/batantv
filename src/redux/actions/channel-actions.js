
// Action Types
export const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL'
export const CLEAR_CHANNEL = 'CLEAR_CHANNEL'

// Action Creators

export const setChannel = ( channelData ) => {
  return {type: SET_CURRENT_CHANNEL, payload: channelData};
}

export const clearChannel = ( ) => {
  return {type: SET_CURRENT_CHANNEL};
}
