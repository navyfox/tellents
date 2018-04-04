import { saveHeadersToLocalStorage, setAxiosHeaders } from '../../../api/axiosHeaders'
import axios from 'axios'
import { Api } from '../../../api'

const SKILLS_SUCCESS = 'SKILLS_SUCCESS'
const initialState = {
  profession_categories: [],
  // role: null,
  // fetching: false,
  // leaderboard: [],
  // network: {},
  // event: {},
  // myTeam: {},
  // loginErrors: [],
  // userAvatarLink: '',
}

export const getMySkills = () => (dispatch) => new Promise((resolve) => {
  Api.userSkills()
    .then((res) => {
      const profession_categories = { ...res.data.profession_categories }
      dispatch({
        type: SKILLS_SUCCESS,
        from: 'userSkills',
        profession_categories,
      })
      resolve({ profession_categories: profession_categories })
    })
}).catch((error) => {
  reject(error)
})


export const actions = {
  getMySkills,
}
const ACTION_HANDLERS = {
  [SKILLS_SUCCESS]: (state, action) => ({
    ...state,
    from: action.from,
    profession_categories: action.profession_categories,
  }),
}

export default function userSkillsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}