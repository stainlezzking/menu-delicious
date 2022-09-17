import { useState } from 'react';
import classes from './title.module.css'

const Subtitle =  props => {
    const [classList, setClassList] = useState(null)
    setTimeout(()=> setClassList([classes.title, classes.grow]), 2000)
    return(
        <h2 className={classList ? classList.join(' '):classes.title }> 
        {props.children}
        <span></span>
        </h2>
    )
}
export default Subtitle;