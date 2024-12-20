import { useState } from 'react'

export const useForms = (inicialForms={}) => {
        
    const [formState, setformState] = useState(inicialForms)

        const onInputChange=({target})=>{
        const{name, value}=target
        setformState({
            ...formState,
            [name]:value
        })
    }

  return {
    ...formState,
    onInputChange
  }
}
