import React from 'react'
import { useState } from 'react'

export const usCounter = (inicialvalue=0) => {
  const [counter, setCounter] = useState(inicialvalue)

  const decrement= (val = 1, allownegative = true)=>{
    if(!allownegative && counter <1)return
    setCounter(counter -val)
  }
  const increment= (val = 1)=>{
    setCounter(counter +val)
  }
  const reset= ()=>{
    setCounter(inicialvalue)
  }
  
  return {
    counter,
    decrement,
    increment,
    reset
  }
}
