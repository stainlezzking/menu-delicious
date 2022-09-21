import Subtitle from '../../components/title/title'
import FoodDetail from '../../components/food-detail/detail'
import Price from '../../components/price/price'
import Pizza from '../../assets/pizza.svg'
import glass from '../../assets/glass.svg'
import burger from '../../assets/burger.svg'
import classes from './front.module.css'

const Front = () => {
    return ( 
        <>
    <Subtitle> Best Seller</Subtitle>

    <div className={classes.listBlock}>
        <div>             
            <Price > Lorem Ipsum </Price>
            <Price price={10}> Lorem Ipsum </Price>
            <Price price={15}> Lorem Ipsum </Price>
            <Price price={10}> Lorem Ipsum </Price>
        </div>
            <FoodDetail src={glass} title="Sex on Beach"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus  similique debitis rem a.</FoodDetail>
        </div>
        <div className={classes.listBlock}>
        <div>             
            <Price price={20}> Lorem Ipsum </Price>
            <Price price={10}> Lorem Ipsum </Price>
            <Price price={15}> Lorem Ipsum </Price>
            <Price price={10}> Lorem Ipsum </Price>
        </div>
            <FoodDetail src={Pizza} title="Pizza"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus s rem a.</FoodDetail>
        </div>
        <div className={classes.listBlock}>
        <div>             
            <Price price={20}> Lorem Ipsum </Price>
            <Price price={10}> Lorem Ipsum </Price>
            <Price price={15}> Lorem Ipsum </Price>
            <Price price={10}> Lorem Ipsum </Price>
        </div>
            <FoodDetail top='-20px' src={burger} title="Burger"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi dignissimos similique debitis rem a.</FoodDetail>
    </div>
        </>
     );
}
 
export default Front;