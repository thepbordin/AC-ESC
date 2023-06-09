import {React, useState, useEffect} from 'react'

export default function ChangingText() {
    const WORDS = ["วิทยาศาสตร์", "คอมพิวเตอร์", "คณิตศาสตร์"];
    const EFFECT_DURATION = 1000;
    const fadeIn = 'transition-opacity duration-1000 ease-in-out'
    const fadeOut = `${fadeIn} opacity-0`


    const [wordid, setWordid] = useState(0)
    const [fadeProp, setFadeProp] = useState({
        fade: fadeIn
    })
    
    useEffect(() => {
        const timeout = setInterval(() => {
           fadeProp.fade === fadeIn ? setFadeProp({fade: fadeOut}) : setFadeProp({fade: fadeIn})
        }, EFFECT_DURATION);
   return () => clearInterval(timeout)
   }, [fadeProp])

   useEffect(() => {
    const wordTimeout = setInterval(() => {
        setWordid((prevWordOrder) => (prevWordOrder + 1) % WORDS.length)
    }, EFFECT_DURATION*2)

    return () => clearInterval(wordTimeout)
  }, [])

   
  return (
    <>
        <span className={fadeProp.fade}>{WORDS[wordid]}</span>    
    </>
  )
}
