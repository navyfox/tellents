import axios from 'axios'
import { setAxiosHeaders, getAxiosHeaders } from './axiosHeaders'

const token = localStorage.getItem('access-token')
const client = localStorage.getItem('client')
const uid = localStorage.getItem('uid')

// const baseUrl = 'http://localhost:3001/api/v1/';
const baseUrl = 'https://floating-atoll-63112.herokuapp.com/api/'

export class Api {
  
  static validateToken = () => {
    const url = `${baseUrl}auth/validate_token`
    axios.get(
      url, {
        headers: {
          'access-token': token,
          client,
          uid,
        }
      }
    )
  }

  static registration = (values) => {
    const url = `${baseUrl}auth`
    console.log('values', values);
    return axios.post(url, { 
      config_name: 'default', 
      confirm_success_url: 'https://floating-atoll-63112.herokuapp.com/',
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password
    })
  }

  static login = (email, password) => {
    const url = `${baseUrl}auth/sign_in`
    return axios.post(
      url,
      {
        email: email,
        password: password
      });
  }

  static userSkills = () => {
    const url = `${baseUrl}v1/profile/skills/user`
    if (getAxiosHeaders(axios)) {
      return axios.get(url);
    }
  }

  static logout = () => {
    const url = `${baseUrl}auth/sign_out`
    axios.delete(url, axios.defaults.headers)
  }

}
