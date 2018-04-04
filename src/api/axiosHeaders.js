import axios from 'axios/index'

export function setAxiosHeaders(axios, res) {
  const axiosConfigure = axios;
  axiosConfigure.defaults.headers.common['access-token'] = res.headers['access-token'];
  axiosConfigure.defaults.headers.common['client'] = res.headers.client;
  axiosConfigure.defaults.headers.common['uid'] = res.headers.uid;
}

export function saveHeadersToLocalStorage (res) {
  localStorage.setItem('access-token', res.headers['access-token'])
  localStorage.setItem('client', res.headers.client)
  localStorage.setItem('uid', res.headers.uid)
}

export function getAxiosHeaders(axios) {
  const token = localStorage.getItem('access-token')
  const client = localStorage.getItem('client')
  const uid = localStorage.getItem('uid')
  if (token === undefined || token === null) {
    return false
  }
  const axiosConfigure = axios;

  axiosConfigure.defaults.headers.common['access-token'] = token;
  axiosConfigure.defaults.headers.common['client'] = client;
  axiosConfigure.defaults.headers.common['uid'] = uid;
  return true
}