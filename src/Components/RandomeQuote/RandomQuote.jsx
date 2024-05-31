import React, { useState } from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { IoReloadCircleOutline } from "react-icons/io5";
import './RandomQuote.css'

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const [quote,setQuote] = useState({
        text: "Jawad swed is the best.",
        author: "Jawad swed"
    });

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    }
    const x = ()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text}  - ${quote.author.split(',')[0]} `)
    }

    loadQuotes();

  return (

    <div id='quote-box'>
        <div id='text'>{quote.text}</div>
        <div id='author'>-{quote.author.split(',')[0]}</div>
         <div className='line'></div>
         <div className='bottom'>
            <div className='icons'>
                <div id='new-quote'>
                <IoReloadCircleOutline  size={40} onClick={random}/>
                </div>
                <div id='tweet-quote'>
                <FaXTwitter  size={40} onClick={random}/>
                
                </div>
                
            </div>
         </div>
    </div>
  )
}

export default RandomQuote
