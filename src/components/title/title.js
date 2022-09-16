import classes from './title.module.css'

const Subtitle =  props => (
    <h2 className={classes.title}> 
    {props.children}
    <span></span>
    </h2>
)
export default Subtitle;