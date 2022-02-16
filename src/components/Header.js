import React from "react";
import "./Header.scss";
import { useHistory } from "react-router-dom"

export default function Header(){

    const history = useHistory()

    function toResume(){
        history.push('/resume')
    }

    return (
        <div className="top">
            <div className="topHead">
                <img className="bgimg" alt="" src={ require('../img/head_bg.webp').default } />
                <div className="info">
                    <div className="head">
                        <div className="photo">
                            <img alt="" src={ require('../img/avator.webp').default } />
                            <span>未登录</span>
                        </div>
                        <div className="intr">
                            <div>
                                <span className="title">哆啦A梦Hero</span>
                                <span className="tag" style={{ background:'#00a1d5' }}>技术宅</span>
                                <span className="tag" style={{ background:'#fb7299' }}>前端开发</span>
                                <span className="tag" style={{ background:'#5c968e' }}>NodeJS</span>
                            </div>
                            <p>一只梦想改变世界的程序员</p>
                        </div>
                        <div className="resume">
                            <button onClick={ toResume }>我的简历</button>
                        </div>
                    </div>
                    <div className="setting">
                        设置
                    </div>
                </div>
            </div>
            <div className="topNav">
                <div className="nav">
                    <div><img alt="" src={ require('../img/zhuye.png').default } />主页</div>
                    <div><img alt="" src={ require('../img/youxi.png').default } />游戏</div>
                    <div><img alt="" src={ require('../img/gongju.png').default } />工具</div>
                    <div><img alt="" src={ require('../img/dongtai.png').default } />动态</div>
                    <div><img alt="" src={ require('../img/wangpan.png').default } />网盘</div>
                    <div className="search"><img alt="" src={ require('../img/sousuo.png').default } /><input type="text" placeholder="搜索"  /></div>
                </div>
                
                <div className="logs">
                    <div title="12">
                        <p>文章数</p>
                        <span>12</span>
                    </div>
                    <div title="99">
                        <p>阅读数</p>
                        <span>99</span>
                    </div>
                    <div title="6">
                        <p>获赞数</p>
                        <span>6</span>
                    </div>
                </div>
            </div>
        </div> 
    )
}