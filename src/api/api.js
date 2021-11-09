import request from './request'


const api = {
    listRoute(){
        return request({
            url: '/list/route',
            method: 'get'
        })
    }
}

export default api