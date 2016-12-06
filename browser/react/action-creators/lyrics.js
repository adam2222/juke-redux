import {SET_LYRICS} from '../constants';
import store from '../store';
import axios from 'axios';

export const setLyrics = function (text) {
  if (typeof text !== 'string') { text = "No Lyrics Found" }

  return {
    type: SET_LYRICS,
    lyric: text
  };
};


export const fetchLyrics = function (artist, song) {
  return function (dispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      });
  };
};
