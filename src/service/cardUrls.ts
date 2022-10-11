import request from '@/utils/request';
import { getUrl } from './config';

// 卡片类型列表
const cardTypeListsUrl = () => {
  return request.get(getUrl('/app_v3/album/card/type/list'))
    .then(data => data)
    .catch(e => {
      console.log(e);
      return {}
    })
}
// 获得文稿信息
const getAiManuscriptsUrl = (params: any) => {
  ///app_v3/album/card/append
  return request.post(getUrl('/app_v3/album/asr/info'), params)
    .then(data => data)
    .catch(e => {
      console.log(e);
      return {}
    })
}

// 根据声音ID获取卡片列表
const getSoundCardListUrl = (params: any) => {
  return request.post(getUrl('/app_v3/album/card/list/t'), params)
    .then(res => res?.data?.list)
    .catch(e => {
      console.log(e);
      return null
    })
}

// 新增更新卡片
const addUpdatrCardUrl = (params: any) => {
  const { card_id, ...elseParams } = params;
  ///app_v3/album/card/append
  return request.post(getUrl(card_id ? '/app_v3/album/card/update' : '/app_v3/album/card/append'), params)
    .then(data => data)
    .catch(e => {
      console.log(e);
      return null
    })
}
// 校验提交卡片是否冲突
const checkstartdUrl = (params: any) => {
  ///app_v3/album/card/append
  return request.post(getUrl('/app_v3/album/checkstart'), params)
    .then(data => data)
    .catch(e => {
      console.log(e);
      return null
    })
}


// 删除卡片
const deleteCardUrl = (params: any) => {
  ///app_v3/album/card/append
  return request.post(getUrl('/app_v3/album/card/del'), params)
    .then(data => data)
    .catch(e => {
      console.log(e);
      return {}
    })
}
// 显示隐藏卡片
const isShowCardUrl = (params: any) => {
  ///app_v3/album/card/append
  return request.post(getUrl('/app_v3/album/card/setHidden'), params)
    .then(data => data)
    .catch(e => {
      console.log(e);
      return {}
    })
}

export {
  addUpdatrCardUrl,
  getSoundCardListUrl,
  deleteCardUrl,
  isShowCardUrl,
  getAiManuscriptsUrl,
  checkstartdUrl,
  cardTypeListsUrl,
}