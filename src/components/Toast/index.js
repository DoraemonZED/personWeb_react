import ReactDOM from 'react-dom'
// import React from 'react'
import Toast from './Toast'


let div = document.createElement('div')
document.body.appendChild(div)



const toast = ReactDOM.render(<Toast />, div, res => {
    console.log(res)
})




const method = {
    info(){
        console.log(toast)
    }
}

export default method
