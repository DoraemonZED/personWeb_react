
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./App.scss";

import Home from './views/home.js'
import Resume from './views/resume.js'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Home }></Route>{/* 首页 */}
        <Route path="/resume" component={ Resume }></Route>{/* 个人简历页面 */}
      </Switch>
    </Router>
  )
}

export default App;
