import request from '@/utils/request';
import { getUrl } from './config';

// ----------home首页----------
// 获取用户信息接口
export const getauthorinfoApi = () => {
  return request.get(getUrl('/authorapi/getauthorinfo'));
};

// ----------获取专辑列表----------
// 获取用户信息接口
export const getAlbumListsApi = () => {
  return request.post(getUrl('/app_v3/album/list'));
};

// ----------获取专辑列表----------
// 专辑asr目录【需要登陆】
export const getAlbumCatalogApi = (params: any) => {
  return request.post(getUrl('/app_v3/album/catalog'), params)
    .then(res => res)
    .catch(() => null);
};