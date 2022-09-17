import Header from './components/header/header';
import Price from './components/price/price';
import Subtitle from './components/title/title';
import FoodDetail from './components/food-detail/detail'
import classes from './App.module.css'
import Background from './components/background/background';
import Pizza from './assets/pizza.svg'
import glass from './assets/glass.svg'
import burger from './assets/burger.svg'
function App() {
  
  return (
    <>
    <Background />
    <div className={classes.App}>
        <div className={classes.restraint}>
           <Header />
           <div style={{
             marginTop : '40px'
           }}>
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
                <FoodDetail src={burger} title="Burger"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi dignissimos similique debitis rem a.</FoodDetail>
            </div>
           </div>
           
        </div>
    </div>
    </>
  );
}

export default App;
