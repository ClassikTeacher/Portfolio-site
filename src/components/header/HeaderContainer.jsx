import React from 'react'
import Button from './button/Button'
import DescriptionTitle from './description/DescriptionTitle'
import Logo from './logo/Logo'
import Navbar from './navbar/Navbar'
import Title from './title/Title'

const HeaderContainer = ()=>{
    return(
        <div className='headerContainer'>
            <div className='headerContainer-navBlock'>
                <Logo />
                <Navbar />
                <Button />
            </div>
            <div className='headerContainer-titleBlock'>
              <Title />
              <DescriptionTitle /> 
            </div>
           
        </div>
    )
}
export default HeaderContainer