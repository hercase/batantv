
// Action Types
export const PLAY_VIDEO = 'PLAY_VIDEO'

// Action Creators

export const playVideo = (title, url) => {
  let payload = { title, url }
  return {type: PLAY_VIDEO, payload};
}

