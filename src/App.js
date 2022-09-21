import Header from './components/header/header';
import classes from './App.module.css'
import Background from './components/background/background';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import Front from './pages/front/front';
import Admin from './pages/admin/admin';
import {Button} from 'react-bootstrap' 
function App() {
  
    const [homeRoute, setHomeRoute] = useState(true)
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
            <Button onClick={()=> setHomeRoute(e=> !e)} title="login as admin" variant="success" className="mx-auto d-block"> { homeRoute ? 'Admin' : "Menu's"} </Button>
             </nav>
           <div style={{
             marginTop : '40px'
           }}>
              {homeRoute ? <Front /> : <Admin />}
           </div>
           
        </div>
    </div>
    </>
  );
}

export default App;
