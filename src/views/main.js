import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import "./main.scss";

import Header from '../components/Header.js'
import Home from '../components/Home.js'
import Games from '../components/Games.js'
import Tools from '../components/Tools.js'
import Space from '../components/Space.js'
import Cloud from '../components/Cloud.js'

export default function Main(){

    return (
        <div className="bg">
            <Header />
            <div className="content">
                <Switch>
                    <Route path="/blog" component={ Home } />
                    <Route path="/game" exact component={ Games } />
                    <Route path="/tool" exact component={ Tools } />
                    <Route path="/space" exact component={ Space } />
                    <Route path="/cloud" exact component={ Cloud } />
                    <Redirect from="/*" to="/error" />
                </Switch>
            </div>
            <div style={{ height: '140px', background: '#fff',marginTop: '50px', position: 'absolute', bottom: '0',left: '0',right:'0' }}>
                
            </div>
        </div>
    )
}