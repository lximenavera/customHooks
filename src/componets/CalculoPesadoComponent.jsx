import { useState } from 'react'
import { useMemo } from 'react'




export const CalculoPesadoComponent = () => {

    const [show, setshow] = useState(true)
    const [numList, setnumList] = useState([2, 4, 5, 6, 7, 8, 9])

    const getCalculo = (numList) =>{
        console.log('calculando..')
        return numList.reduce((a, b) => a * b)
    }

    const addNumber = () => {
        setnumList([...numList, numList[numList.length - 1] + 1])
    }

    const memorizedValue =useMemo(() => getCalculo(numList), [numList])
    return (
        <>
            <h3>Calculos pesados</h3>
            <h4>el calculo es : {getCalculo(numList)}</h4>
            <button className="btn btn-success" onClick={() => { setshow(!show) }}>{show ? 'Ocultar Calculo' : 'Mostar Calculo'}</button>
            <button className="btn btn-danger" onClick={() => { addNumber() }}>Agregar Numero</button>

        </>

    )

}
