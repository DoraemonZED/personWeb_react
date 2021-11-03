import request from './request'


const api = {
    index(){
        return request({
            url: '/api/index',
            method: 'get',
            data: {
                new:123,
                datas:456
            }
        })
    }
}

export default api