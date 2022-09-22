import Header from './components/header/header';
import classes from './App.module.css'
import Background from './components/background/background';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import Front from './pages/front/front';
import Admin from './pages/admin/admin';
import {Button} from 'react-bootstrap' 
import { useSelector, useDispatch } from 'react-redux'
import {switchRoute} from './store/UI_reduces'

function App() {
      const menus = useSelector(state=> state.menuReducer)
      const homeRoute = useSelector(state=> state.UIreducer.homeRoute)
      const dispatch = useDispatch()
  useEffect(()=>{
    AOS.init({
      useClassNames: true,
      duration: 100,
      once : true
    });
  },[])

  return (
    <>
    <Background />
    <div className={classes.App}>
        <div className={classes.restraint}>
           <Header />
            <nav>
            <Button onClick={()=> dispatch(switchRoute())} title={homeRoute ? "login as admin" : "Logout of Admin"} variant="success" className="mx-auto d-block"> { homeRoute ? 'Admin' : "Menu's"} </Button>
             </nav>
           <div style={{
             marginTop : '40px'
           }}>
              {homeRoute ? <Front menus={menus} /> : <Admin changeRoute={()=>dispatch(switchRoute())} addMenu={dispatch}/>}
           </div>
           
        </div>
    </div>
    </>
  );
}

export default App;
