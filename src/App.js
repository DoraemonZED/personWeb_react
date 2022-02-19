
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./App.scss";

import Main from './views/main.js'
import Resume from './views/resume.js'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/blog" tsrict component={ Main }></Route>{/* 首页 */}
        <Route path="/resume" tsrict component={ Resume }></Route>{/* 个人简历页面 */}
      </Switch>
    </Router>
  )
}

export default App;
