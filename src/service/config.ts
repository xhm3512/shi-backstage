const env = process.env.NODE_ENV || 'development'; //
const prefix = '//authorapi.test.qijizuopin.com';
const preOnlinefix = '//authorapi.qijizuopin.com';

const envUrlDev = {
  development: preOnlinefix, ////localhost:3000
  // development: '//localhost:3000', ////localhost:3000
  test: prefix,
  uat: preOnlinefix,
  production: preOnlinefix,
};
export const getUrl = (url: string) => {
  return `${envUrlDev[env]}${url}`;
};
