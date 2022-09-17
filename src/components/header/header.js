import Dwk from  "../DWK/dwk"
import MenuDelicious from '../../assets/menudelicious.js'
import classes from './header.module.css'
import menuSide from '../../assets/menu-side.png'

const Header = () => (
    <>
            <div style={{ width: '90%', maxWidth :  '400px', margin : 'auto'}}>
            <Dwk />
            </div>
            <MenuDelicious />
            <h1 className={classes.menu}> 
            <img src={menuSide} alt="" className={classes.reverse}/>
            Menu
            <img src={menuSide} alt=""/>
            </h1>
    </>
)
 
export default Header;