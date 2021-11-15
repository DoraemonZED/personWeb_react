import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Routers from './routers';
import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './style/app.scss'
import NavMenu from './components/NavMenu.jsx'
import Header from './components/Header.jsx'
import Home from './views/home'
import Itempage from './views/itempage'
function App() {
  const dispatch = useDispatch()
  let Routers = []
  Routers = useSelector(state => state)
  for(var i of Routers){
    if(i.path === '/'){
      i.component = Home
    }else{
      i.component = Itempage
    }
    
  }


  useEffect(()=>{
    React.$api.listRoute().then((res)=>{
      dispatch({ type: 'add_data', data:res.data })
    })
  },[dispatch])

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
