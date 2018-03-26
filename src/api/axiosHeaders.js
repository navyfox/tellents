export function setAxiosHeaders(axios, res) {
  const axiosConfigure = axios;
  axiosConfigure.defaults.headers.common['access-token'] = res.headers['access-token'];
  axiosConfigure.defaults.headers.common['client'] = res.headers.client;
  axiosConfigure.defaults.headers.common['uid'] = res.headers.uid;
}