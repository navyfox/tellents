import { saveHeadersToLocalStorage, setAxiosHeaders } from '../../../api/axiosHeaders'
import axios from 'axios'
import { Api } from '../../../api'

const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'
const SET_HEADERS = 'SET_HEADERS'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
const VALIDATE_TOKEN = 'VALIDATE_TOKEN'
const initialState = {
  currentUser: {},
  // role: null,
  // fetching: false,
  // leaderboard: [],
  // network: {},
  // event: {},
  // myTeam: {},
  // loginErrors: [],
  // userAvatarLink: '',
}

export const loginUser = (email, password) => (dispatch) => new Promise((resolve) => {
  Api.login(email, password)
    .then((res) => {
      saveHeadersToLocalStorage(res)
      setAxiosHeaders(axios, res)
      const combinedUser = { ...res.data }
      dispatch({
        type: SET_HEADERS,
        headers: {
          uid: res.headers.uid,
          token: res.headers['access-token'],
          client: res.headers.client,
        },
      })
      dispatch({
        type: LOGIN_SUCCESS,
        from: 'login',
        user: combinedUser,
      })
      resolve({ user: combinedUser })
    })
}).catch((error) => {
  reject(error)
})

export const registrationUser = (credentials) => (dispatch) => new Promise((resolve, reject) => {
  Api.registration(credentials)
    .then((res) => {
      const combinedUser = { ...res.data }
      saveHeadersToLocalStorage(res)
      setAxiosHeaders(axios, res)
      dispatch({
        type: REGISTRATION_SUCCESS,
        from: 'registration',
        user: combinedUser,
      })
      dispatch({
        type: SET_HEADERS,
        headers: {
          uid: res.headers.uid,
          token: res.headers['access-token'],
          client: res.headers.client,
        },
      })
      resolve(combinedUser)
    })
}).catch((err) => {
  reject(err)
})

export const actions = {
  loginUser,
}
const ACTION_HANDLERS = {
  [REGISTRATION_SUCCESS]: (state, action) => ({
    ...state,
    currentUser: action.user,
    from: action.from,
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    currentUser: action.user,
    from: action.from,
  }),
  [SET_HEADERS]: (state, action) => ({
    ...state,
    headers: action.headers,
  }),
  [LOGOUT_SUCCESS]: (state, action) => ({
    ...state,
  }),
}

export default function userReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}