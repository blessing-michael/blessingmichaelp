import React, { useEffect, useState } from 'react'

function Cardcontainer() {
    const [cards, setCards]= useState([1,2,3,4,5])

    const randomCard =()=>{
        // setCards()
        cards.sort(()=>Math.random() > 0.5? -1 : 1)
    }

    useEffect(()=> {
        randomCard();
    })
    console.log(randomCard)
  return (
    <div>

    </div>
  )
}

export default Cardcontainer