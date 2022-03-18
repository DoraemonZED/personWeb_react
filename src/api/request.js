
export default async function request ({ url, method, data={} }){// fetch请求封装
    url = '/api' + url;
    if(method === 'get' && Object.keys(data).length){
        let paramsArr = []
        Object.keys(data).forEach(key => paramsArr.push(`${key}=${data[key]}`))
        if(url.search(/\?/) === -1){
            url = url+'?'+paramsArr.join('&')
        }else{
            url = url+'&'+paramsArr.join('&')
        }
    }

    const res = await fetch(url, {
        method,
        headers: {
            'content-type': 'application/json'
        },
        [method === 'get' ? null : 'body']: JSON.stringify(data),
    });
    const resData = await res.json();
    return resData;
}