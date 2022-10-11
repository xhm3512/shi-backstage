import axios from 'axios';

axios.defaults.timeout = 20000
// axios.defaults.baseURL = 'http://localhost:3002'
axios.defaults.withCredentials = true; //发起请求携带cookie(CROS跨域需要服务端的支持)

//所有应用只设置一次代理
// if (window.axiosInterceptors == undefined) {
//请求拦截
const requestIdx = axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);
if (requestIdx !== 0) {
  axios.interceptors.request.eject(requestIdx);
}

// function goLogin() {
//   window.location.href = `https://passport.ximalaya.com/page/web/login?fromUri=${encodeURIComponent(
//     'http://www.ximalaya.com/passport/i/sso?fromUri=http://www.qijizuopin.com/dologin?t=' +
//       window.location.href,
//   )}`;
// }
// TODO:后序需要修改的登录方案
function goLogin() {
  window.location.href = `http://www.ximalaya.com/passport/i/sso?fromUri=${encodeURIComponent(`http://www.qijizuopin.com/dologin?t=${window.location.href}`)}`
}
const goCreate = () => {
  window.location.href = '//www.qijizuopin.com/author/welfareinfo';
};
// 状态码拦截器
const interceptorsRequest = (data: any) => {
  const { code } = data;
  switch (code) {
    case 200:
      return data;
    case 401:
      goCreate();
      return;
    case 201:
      goLogin();
      return;
    default:
      // goLogin();
      return data;
  }
};

function get(url: string, params = {}) {
  params['_'] = new Date().getTime()
  return axios.get(url, { params }).then((resp) => {
    if (!(resp && resp.data)) goLogin();
    return interceptorsRequest(resp && resp.data);
  });
}

function post(url: string, params?: any) {
  return axios.post(`${url}?_=${new Date().getTime()}`, params).then((resp) => {
    if (!(resp && resp.data)) goLogin();
    return interceptorsRequest(resp && resp.data);
  });
}
function getUrl(api: string) {
  return process.env.BASE_API + api;
}

function setAuthHeader(token: string) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

function checkToken() {
  const url = getUrl('/api/authenticate');
  return new Promise<void>((resolve, reject) => {
    const id_token = sessionStorage.getItem('id_token');
    if (id_token != undefined) {
      setAuthHeader(id_token);
      resolve();
    } else {
      axios
        .post(url, {
          username: '',
          password: '!qaz2wsx3edc4rfv',
          rememberMe: false,
          env: 'prod',
        })
        .then((resp: any) => {
          const token = resp.id_token;
          setAuthHeader(token);
          sessionStorage.setItem('id_token', token);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    }
  }).catch((err) => {
    console.log(err);
    // goLogin();
  });
}

function getNoToken(api: string, params: any) {
  const url = getUrl(api);
  return axios.get(url, params).then((resp) => {
    return resp;
  });
}
function put(api: string, params?: any) {
  const url = getUrl(api);
  return checkToken().then(() => {
    return axios.put(url, params).then((resp) => {
      return resp;
    });
  });
}

function del(api: string, params: any) {
  const url = getUrl(api);
  return checkToken().then(() => {
    return axios.delete(url, params).then((resp) => {
      return resp;
    });
  });
}

export default { get, getNoToken, post, put, del };
