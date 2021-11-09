import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routers from './routers';
import React from 'react';
import './style/app.scss'
import NavMenu from './components/NavMenu.jsx'
import Header from './components/Header.jsx'

function App() {
  // useEffect(() => {
  //   React.$api.index()
  // })

  return (
    <div className="App">
      <Router>
        <Header/>{/*头部导航*/}
        <div className="content">
          <NavMenu/>{/*左侧菜单*/}
          <div className="page">{/*页面*/}
            <div>
                <Switch>
                  {
                    Routers.map( item => {
                      return (
                        <Route
                          key={ item.path }
                          path={ item.path }
                          exact={ true }
                          component={ item.component }
                        ></Route>
                      )
                    })
                  }
                </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
