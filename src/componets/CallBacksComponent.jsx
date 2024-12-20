import { useCallback, useState } from "react"
import { IncrementarComponent } from "./IncrementarComponent"


export const CallBacksComponent = () => {
    const [counter, setcounter] = useState(0)

    const incrementatPadre= useCallback(
      (val) => {
       setcounter(c=> c + val)
      },
      [],
    )
    


  return (
    <>
    <h1>Contador :{counter}</h1>
    <IncrementarComponent increment ={incrementatPadre}/>


    </>
  )
}
