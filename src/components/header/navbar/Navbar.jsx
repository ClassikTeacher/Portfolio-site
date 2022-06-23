import React from 'react'
import classes from './Navbar.module.css'

const Navbar = ()=>{
    return(
        <div className={classes.navbar}>
            <a href='#'>About</a>
            <a href='#'>Service</a>
            <a href='#'>Pricing</a>
            <a href='#'>Blog</a>
        </div>
    )
}
export default Navbar