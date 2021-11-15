
import React from "react";
import { useHistory } from "react-router-dom";
import '../style/component-sty/navmenu.scss'
import {  useSelector } from 'react-redux'


export default function Header(){
    let history = useHistory();//路由跳转
    let route = []
    route = useSelector( state => state )

    function toDetail(path){
        history.replace(path)
    }

    
    return (
        <div className="list">
            {
                route.map((item, index) => {
                    return (
                        <div className="listitem" key={index} onClick={()=>{ toDetail(item.path) }} >
                            <div className="item">{ item.name }</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
