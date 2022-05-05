import request from './request'


const api = {
    getBlog(data){
        return request({
            url: 'blogs/blog_paper',
            method: 'get',
            data
        })
    },

    saveBlog(parmas){
        return request({
            url: 'blogs/write',
            method: 'post',
            data: parmas
        })
    },

    getBlogNav(){
        return request({
            url: 'blogs/blogNav',
            method: 'get',
        })
    },

    getTitle(data){
        return request({
            url: 'blogs/getTitle',
            method: 'get',
            data
        })
    },

    sendBlogNav(data){
        return request({
            url: 'blogs/blogNav',
            method: 'post',
            data
        })
    }
}

export default api