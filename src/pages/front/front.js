import Subtitle from '../../components/title/title'
import FoodDetail from '../../components/food-detail/detail'
import Price from '../../components/price/price'
import classes from './front.module.css'


const Front = ({menus}) => {
    
    return ( 
        <>
        <Subtitle> Best Seller</Subtitle>
        {menus.map((menu, index)=>{
       return(
            <div key={index} className={classes.listBlock}>
            <div>             
                {menu.variations.map((variant, i)=> <Price key={i} price={variant.price}> {variant.title} </Price>)}
            </div>
            <FoodDetail src={menu.selectImage} title={menu.title}> {menu.description} </FoodDetail>
            </div>
       )
            })
        }
        </>
     );
}
 
export default Front;