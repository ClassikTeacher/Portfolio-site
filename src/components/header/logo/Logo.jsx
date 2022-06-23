import React from 'react'
import classes from './Logo.module.css'

const Logo = ()=>{
    return(
        <div className={classes.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="45.651" height="43.416" viewBox="0 0 45.651 43.416">
                <g id="Polygon" transform="translate(-1.175)" fill="none" stroke-miterlimit="10">
                    <path d="M24,0,46.825,16.584,38.107,43.416H9.893L1.175,16.584Z" stroke="none"/>
                    <path d="M 23.99999809265137 6.180351257324219 L 7.052497863769531 18.49341773986816 L 13.5258674621582 38.41640472412109 L 34.47411346435547 38.41640472412109 L 40.94748306274414 18.49341583251953 L 23.99999809265137 6.180351257324219 M 24 3.814697265625e-06 L 46.82534408569336 16.58358573913574 L 38.10683441162109 43.41640472412109 L 9.893146514892578 43.41640472412109 L 1.174636840820312 16.58358573913574 L 24 3.814697265625e-06 Z" stroke="none" fill="#ef6d58"/>
                </g>
                <path id="Polygon-2" data-name="Polygon" d="M9.5,0l9.035,6.564L15.084,17.186H3.916L.465,6.564Z" transform="translate(12.825 14)" fill="#ef6d58"/>
            </svg>
            <svg className={classes.text} xmlns="http://www.w3.org/2000/svg" width="79" height="32" viewBox="0 0 89 32">
                <text id="Agency" transform="translate(0 26)" fill="#fff" font-size="24" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Agency</tspan></text>
            </svg>




        </div>
    )
}
export default Logo