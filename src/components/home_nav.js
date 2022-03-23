import styles from './Home.module.scss'
import { useParams } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import Toast from './Toast/index'

export default function NavCard({ Chapter, propClick, navStates, selectNavStates, addNav }){

    const params = useParams()
    let myInput = useRef()
    let myI = useRef()
    Toast.info()

    let [activeAdd, setactiveAdd] = useState(false)

    function show(event){
        if(event.target === myInput.current) return
        if(event.target !== myI.current){
            setactiveAdd(false)
            document.removeEventListener('click', show)
        }
    }

    function addClass( bool ){  
        if(bool){ 
            React.$api.sendBlogNav({
                state: navStates,
                title: myInput.current.value
            }).then((res) => {
                if(res.code === 200){
                    addNav(res.result)
                    myInput.current.value = ''
                }
            })
        }else{
            setactiveAdd(true)
            setTimeout(() => {
                myInput.current.focus()
            },710)
            document.addEventListener('click', show)
        }
    }

    return(
        <div className={styles.box} >
            <div className={`${styles.boxTitle} ${styles.boxTitle_height}`}>
                <div className={ navStates===1?styles.active:'' } onClick={ () => selectNavStates(1) }>学习笔记</div>
                <div className={ navStates===2?styles.active:'' } onClick={ () => selectNavStates(2) }>速查表格</div>
            </div>
            <div style={{ height:'500px',overflowY:'auto' }}>
                {
                    Chapter.map((item, index)=>{
                        return(
                            <div 
                                onClick={() => propClick(item)} 
                                key={index} 
                                className={[ styles.titlenav, item._id===params.n?styles.activeNav:null ].join(' ')}
                            >{item.title}</div>
                        )
                    })
                }
            </div>
            <div className={ styles.tianjia } title="添加新分类">
                <input ref={myInput} className={ activeAdd?styles.active:null } />
                <i
                    ref={myI} 
                    className={['iconfont icon-tianjia', activeAdd?styles.active:null].join(' ')} 
                    style={{ fontSize: '30px' }}
                    onClick={ () => addClass(activeAdd) }
                    ></i>
            </div>
        </div>
    )
}