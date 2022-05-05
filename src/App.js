
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import "./App.scss";

import Main from './views/main.js'
import Resume from './views/resume.js'
import Error from './views/error.js';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/resume" exact tsrict component={ Resume }></Route>{/* 个人简历页面 */}
        <Route  path="/error" component={Error} />
        <Route path="/" tsrict component={ Main }></Route>{/* 首页 */}
        <Redirect path="/*" to='/error' />
      </Switch>
    </Router>
  )
}

export default App;
