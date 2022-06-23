import React from 'react'
import classes from './ButtonLoad.module.css'

const ButtonLoad = ({children, ...props})=>{
   

    return(
    <button {...props} className={classes.button}>
        {children}
    </button>
    )
}
export default ButtonLoad