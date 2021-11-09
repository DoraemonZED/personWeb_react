
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import '../style/component-sty/navmenu.scss'


export default function Header(){
    let history = useHistory();

    const [list, setlist] = useState([])

    useEffect(()=>{
        React.$api.listRoute().then((res)=>{
            setlist(res.data)
        })
    },[])


    function toDetail(path){
        history.push(path)
    }

    return (
        <div className="list">
            {
                list.map((item, index) => {
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
