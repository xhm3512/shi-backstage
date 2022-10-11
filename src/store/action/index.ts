import { getauthorinfoApi, getAlbumListsApi, getAlbumCatalogApi } from '@/service/indexUrls';

// 获得专辑列表
export const breadcrumbAction = (dispatch: any,data) => {
  dispatch({
    type: 'breadcrumblist',
    data,
  });;

};


