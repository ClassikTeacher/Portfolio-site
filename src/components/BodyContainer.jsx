import React, { useEffect, useMemo, useState } from 'react'
import { Cards } from '../models/Cards.ts'
import ButtonLoad from './buttun/ButtonLoad'
import ContentContainer from './contentContainer/ContentContainer'
import Filter from './filter/Filter'
import Footer from './Footer'

const BodyContainer = ()=>{
    const [page, setPage] = useState(0)
    const [arrCards, setArrCards] = useState([])
    const [filter, setFilter] = useState('')
    const [filterCards, setFilterCards] = useState([])
    const [selecterCard, setSelectedCard] = useState([])

    useEffect(() => {
        feachCard()

        console.log('start')
    },[])

     useMemo(() => {
        const filteArr = filterArrCards() 
        setFilterCards(filteArr)
        
    },[filter, arrCards])

    useMemo(() => {
        loadingPage()
        console.log('page')
    },[page])

    function filterArrCards(){
        if(filter){
            return arrCards.filter(item => item.category.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
        } else { 
            return arrCards
        }
    }

    function feachCard(){

        const cardsPage = []
        new Cards().cards.map(item => 
            cardsPage.push(item)
        )
        setArrCards(cardsPage)
    }
    function deleteSelectCard(){
        const newArrCard = []
        arrCards.map(item => {
            if(!item.select){
                newArrCard.push(item)
            }
            setArrCards(newArrCard)
        })
    }

    function loadingPage(){
        const cardsPage = [...arrCards]
        if(page){
        new Cards().cards.map(item => {
            item.title = item.title + `${page}`
            cardsPage.push(item)}
        )
        }
        setArrCards([...cardsPage])
        console.log(page)
    }
       

    return(
        <div className='bodyContainer'>
            <Filter 
                filter={filter}
                setFilter={setFilter}
            />
            <ContentContainer 
                filter={filter}
                setFilter={setFilter}
                cards={filterCards}
                page={page}
            />
            <Footer 
                page={page}
                setPage={setPage}
                delCard={deleteSelectCard}
               
            />
              
{/*  ?? ???? ?????????? ???9  ???? ????????????????, ???????? ???????? ?????????????????? ????????????????, ?????? ?????????????? ???????????? "Del" ???????????????? ???????????? ??????????????????. ?????????? ???????? ?????? ???? ???????????? ???????????? ???????????????????????? ?? ?????? ?????????? ?????? ???????????????????????? ??????????????????.
    ?? ???????????? ???????????? Del ????????????????????, ?????????????? ?????????? ???????????????????? ???????????? Del ?? ???????????? ??????????
*/}
            
        </div>
    )
}
export default BodyContainer