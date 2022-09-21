import { useEffect } from 'react';
import classes from './title.module.css'

const Subtitle =  props => {
    return(
        <h2  data-aos={classes.grow} className={classes.title}> 
        {props.children}
        <span></span>
        </h2>
    )
}
export default Subtitle;