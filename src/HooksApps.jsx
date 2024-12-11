import React from 'react'
import { FetchApps } from './componets/FetchApps'
import { CounterApp } from './componets/CounterApp'
import { FormsApps } from './componets/FormsApps'



export const HooksApps = () => {
  return (
    <>
    <h1>Aplicacion Hooks</h1>
   <FetchApps/>
   <hr />
   <CounterApp/>
   <hr />
   <FormsApps/>
    </>
  )
}
