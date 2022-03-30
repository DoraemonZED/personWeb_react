import ReactDOM from 'react-dom'
// import React from 'react'
import Toast from './Toast'


export default function init(a){
    let myToast = document.getElementById('myToast')
    if(myToast) document.body.removeChild(myToast)
    
    let div = document.createElement('div')
    div.id = 'myToast'
    document.body.appendChild(div)
    ReactDOM.render(<Toast message={ a } rootDiv={ div } />, div)

}
