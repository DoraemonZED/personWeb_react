
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import "./App.scss";

import MainPage from './views/Main/';
import BlogPage from './views/Blog/';
import Resume from './views/Resume/';
import Error from './views/Error/';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ MainPage }></Route>
        <Route path="/blog" exact component={ BlogPage }></Route>
        <Route path="/resume" exact component={ Resume }></Route>
        <Route  path="/error" component={ Error } />
        <Redirect path="/*" to='/error' />
      </Switch>
    </Router>
  )
}

export default App;
