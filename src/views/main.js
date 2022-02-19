import React from "react";
import { Route, Switch } from 'react-router-dom';
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
                    <Route path="/blog/" exact component={ Home } />
                    <Route path="/blog/game" exact component={ Games } />
                    <Route path="/blog/tool" exact component={ Tools } />
                    <Route path="/blog/space" exact component={ Space } />
                    <Route path="/blog/cloud" exact component={ Cloud } />
                </Switch>
            </div>
        </div>
    )
}