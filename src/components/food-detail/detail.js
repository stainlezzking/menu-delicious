import classes from './detail.module.css'

const foodDetail = props =>(
    <div className={classes.detail}>             
    <div> <h4>{props.title}</h4>
     <p> {props.children}</p>
     </div>
     <img src={props.src} alt=""/>
  </div>
)
 
export default foodDetail;