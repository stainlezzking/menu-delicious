import classes from './detail.module.css'

const FoodDetail = props =>{
  return (
    <div className={classes.detail}>             
    <div> <h4>{props.title}</h4>
     <p> {props.children}</p>
     </div>
     <img  data-aos={classes.scaleUpCenter} style={{ top : props.top}} src={props.src} alt=""/>
  </div>
  )
}

FoodDetail.defaultProps = {
    top : ''
}
 
export default FoodDetail;