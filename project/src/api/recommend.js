import request from '@/utils/request'

// 推荐
export function recommend () {
  return request({
    url: '/getRecommend',
    method: 'get',

  })
}