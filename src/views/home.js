import React from "react";
import "./home.scss";

import Header from '../components/Header.js'

const chapter = ['css3','JavaScript','HTML5','浏览器','Linux','Unity']

export default function Home(){
    return (
        <div className="bg">
            <Header />
            <div className="content">
                <div className="title">
                    <div className="box padding">
                        <div className="boxTitle">学习笔记</div>
                        {
                            chapter.map((item, index)=>{
                                return(
                                    <div key={index} className="titlenav">{item}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="detail">
                    <div className="box">
                    <div className="boxTitle">标题</div>
                        <div>
                            内容
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}