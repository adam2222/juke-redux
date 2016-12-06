import SET_LYRICS from '../constants';

export const setLyrics = function (text) {
  return {
    type: SET_LYRICS,
    lyric: text
  }
}

const initialState = { text: ''};

function reducer (prevState = initialState, action){
  switch (action.type) {
    case SET_LYRICS:
      return Object.assign({}, prevState, {
        text: action.lyric
      })

    default:
      return prevState;
  }
}
