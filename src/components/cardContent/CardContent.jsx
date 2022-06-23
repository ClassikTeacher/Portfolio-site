import React, {useEffect, useMemo, useState} from 'react'
import classes from './CardContent.module.css'


const CardContent = ({filter, setFilter, card, cards})=>{
   
    const [cl, setCl] = useState(classes.card)
    const [classCategory, setClassCategory] = useState(classes.card)
    
   

    useMemo(() => {
        if(card.select){
            
            setCl(classCategory+ ' ' + classes.card_active)
            }  else{
                setCl(classCategory)
            }
    },[filter, cards])
   
    function activeCard(){
        if(!card.select){
    
            card.select = true
            setCl(classCategory + ' ' + classes.card_active)

        } else {
           
            card.select = false
            setCl(classCategory)
  
        }
    }


    function changeCategory(){
        setFilter(card.category)
    }
   
  
    return(
        
        <div  className={cl}>
            <img  onClick={activeCard} src={card.imeg} alt='imege card'/>
            <div onClick={changeCategory}>
                {card.category}
            </div>
            <span onClick={() => activeCard()}>{card.title}</span>
        </div>
    )
}
export default CardContent