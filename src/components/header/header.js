import Dwk from  "../DWK/dwk"
import MD from '../../assets/menudelicious.svg'
import classes from './header.module.css'
import menuSide from '../../assets/menu-side.png'
const Header = () => (
    <>
     <div style={{ width: '90%', maxWidth :  '400px', margin : 'auto'}}>
            <Dwk />
            </div>
          <img src={MD} alt="" srcset=""/>

            <h1 className={classes.menu}> 
            <img src={menuSide} alt="" className={classes.reverse} srcset=""/>
            Menu
            <img src={menuSide} alt="" srcset=""/>
            </h1>
    </>
)
 
export default Header;