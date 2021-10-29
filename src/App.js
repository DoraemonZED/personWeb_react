import Header from './components/Header.jsx'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routers from './routers';
import React, { useEffect } from 'react';


function App() {
  useEffect(() => {
    React.$api.index()
  })
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          {
            Routers.map( item => {
              return (
                <Route
                  key={ item.path }
                  path={ item.path }
                  // exact={ item.exact }
                  component={ item.component }
                ></Route>
              )
            })
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
