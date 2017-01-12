import { LOAD_PLAYERS_REQUEST, LOAD_PLAYERS_FAIL, LOAD_PLAYERS_SUCCESS  } from '../constants/ActionTypes'

const initialState = {
  club: 'Chelsea',
  players: [],
  fetching: false,
  errors: null
}

export default function counter(state = initialState, action) {
  switch (action.type) {
  case LOAD_PLAYERS_REQUEST:
    return { ...state, players: action.payload, fetching: true}
  case LOAD_PLAYERS_SUCCESS:
    return { ...state, players: action.payload, fetching: false}
  case LOAD_PLAYERS_FAIL:
    return {...state, fetching: false, errors: action.payload}
  default:
    return state
  }
}
