import { LOAD_PLAYERS_REQUEST, LOAD_PLAYERS_FAIL, LOAD_PLAYERS_SUCCESS } from '../constants/ActionTypes'
import axios from 'axios'

export function fetchPlayers(club) {
  return dispatch => {
    dispatch({type: LOAD_PLAYERS_REQUEST})
    axios.get('http://codepen.io/EugeneDesigner/pen/WRwdqY.js')
      .then((response) => {
        dispatch({type: LOAD_PLAYERS_SUCCESS, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: LOAD_PLAYERS_FAIL, payload: err})
      })
  }
}
