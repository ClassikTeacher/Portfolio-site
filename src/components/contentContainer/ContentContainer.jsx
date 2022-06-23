import React from 'react'
import CardContent from '../cardContent/CardContent'

const ContentContainer = ({filter, setFilter, cards, page})=>{

  
    return(
        <div className='contentContainer'>
            { cards
            ? cards.map((item, index) => 
                <CardContent 
                    key={index} 
                    index={index}
                    filter={filter}
                    setFilter={setFilter}
                    card={item}
                    page={page}
                    cards={cards}
                  />
                  
                  
            )
        : <h1>loading...</h1>
        }
                
               
        </div>
    )
}
export default ContentContainer