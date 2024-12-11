import { usCounter } from "../hooks/usCounter"


export const CounterApp = () => {

    const{ counter, decrement, increment, reset}= usCounter(0)

  return (
    <>
    <h2>contador</h2>
    <h2>{counter}</h2>
    <button className="btn btn-primary" onClick={()=>decrement(1, false)}>-1</button>
    <button className="btn btn-primary" onClick={()=>increment()}>+1</button>
    <button className="btn btn-danger"  onClick={()=>reset()}>reset</button>

    </>
  )
}
