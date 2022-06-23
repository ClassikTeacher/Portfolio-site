import React, { useEffect, useMemo, useRef, useState } from 'react'
import classes from './Filter.module.css'

const Filter = ({filter, setFilter})=>{
    const [allCategory, setAllCategory] = useState(classes.active)
    const [designCategory, setDesignCategory] = useState('')
    const [brandingCategory, setBrandingCategory] = useState('')
    const [illustrationCategory, setIllustrationCategory] = useState('')
    const [motionCategory, setMotionCategory] = useState('')
    const [widthWindow, setWidthWindow] = useState(1440)
//    const ref = useRef()
    useMemo(()=>{
        changeActive()
    },[filter])

    useEffect(() => {
        window.addEventListener('resize', resizeWindow)
    },[])

    function resizeWindow(){
        setWidthWindow(window.innerWidth)
    }

    function changeCategory(category){
        setFilter(category)  
        changeActive()  
    }

    function changeActive(){
        setAllCategory('')
        setBrandingCategory('')
        setDesignCategory('')
        setIllustrationCategory('')
        setMotionCategory('')
        switch(filter) {
            case 'Design': setDesignCategory(classes.active) 
            break;
            case 'Branding': setBrandingCategory(classes.active)
            break;
            case 'Illustration': setIllustrationCategory(classes.active)
            break;
            case 'Motion': setMotionCategory(classes.active)
            break;
            default: setAllCategory(classes.active)
        }
      
    }
    return(
        <div className={classes.filter}>
            {widthWindow>=1040
            ? 
            <div className={classes.wrapper}>
                <span onClick={() => changeCategory('')} className={allCategory}>Show All</span>
                <span onClick={() => changeCategory('Design')} className={designCategory}>Design</span>
                <span onClick={() => changeCategory('Branding')} className={brandingCategory}>Branding</span>
                <span onClick={() => changeCategory('Illustration')} className={illustrationCategory}>Illustration</span>
                <span onClick={() => changeCategory('Motion')} className={motionCategory}>Motion</span>
            </div>
       
        : <select onChange={e => changeCategory(e.target.value)}> 
                <option selected value=''>Show All</option>
                <option value='Design'>Design</option>
                <option value='Branding'>Branding</option>
                <option value='Illustration'>Illustration</option>
                <option value='Motion'>Motion</option>
            </select>
            }
         </div>
    )
}
export default Filter