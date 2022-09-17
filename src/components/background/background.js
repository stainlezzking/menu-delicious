import {Cherry, Donut, Donut1, Leaf, Leaf1, Watermelon} from './bg-svg'
import classes from './background.module.css'

const Background = () => {
    const bgArray = [Cherry, Donut, Donut1, Leaf, Leaf1, Watermelon]
    // console.log()
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    // console.log(width, height, (width/50) * (height/50))
    const times = Math.ceil(((width/50) * (height/50))/6)
    console.log(times)
    let wholeArray = []
    for (let i=0; i< times ; i++){
        wholeArray = [...wholeArray, ...bgArray]
    }
    return ( 
        <div className={classes.bgWrap}>
        {
            wholeArray.map((Bg, i)=> <div key={i}> <Bg/> </div>)
        }
        </div>
     )
}
 
export default Background;