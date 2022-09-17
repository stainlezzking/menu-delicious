import classes from './price.module.css'

const Price = props=>(
    <div className={classes.price}>
        <p> {props.children} </p> 
        <div className={classes.dashed}></div>
        <p>{props.price}.<sup>00</sup></p>
    </div>
)

Price.defaultProps = {
    price : 50
}

export default Price