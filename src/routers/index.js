// import Hme from '../views/home.jsx'
// import store from '../store/index'
// import { useSelector } from 'react-redux'

// let Routers = [
    
// ]

// function route(){
//     let list = useSelector(state => state)
//     return (
//         <Router>
//             <Header/>{/*头部导航*/}
//             <div className="content">
//             <NavMenu/>{/*左侧菜单*/}
//             <div className="page">{/*页面*/}
//                 <div>
//                     <Switch>
//                     {
//                         Routers.map( item => {
//                         return (
//                             <Route
//                             key={ item.path }
//                             path={ item.path }
//                             exact={ true }
//                             component={ item.component }
//                             ></Route>
//                         )
//                         })
//                     }
//                     </Switch>
//                 </div>
//             </div>
//             </div>
//         </Router>
//     )
    
// } 


// store.subscribe(() => {
//     Routers = store.getState()
//     for(var i=0; i<Routers.length; i++){
//         Routers[i].component = Home
//     }
// })



// export default routeo