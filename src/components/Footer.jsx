import React from 'react'
import ButtonLoad from './buttun/ButtonLoad'

const Footer = ({page, setPage, delCard})=>{

    function loadNewPage(){
        setPage(page+1)
    }
    return(
        <div className='footer'>
            <ButtonLoad 
                onClick={loadNewPage} 
            >
                LODE MORE
            </ButtonLoad>
            <ButtonLoad className='delButton'
                 onClick={delCard} 
            > Del </ButtonLoad>
        </div>
    )
}
export default Footer