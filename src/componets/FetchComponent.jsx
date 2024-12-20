
import { useEffect } from 'react'
import {  useFetch } from '../hooks/useFetch'

export const FetchComponent = () => {

  
  const url= 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    fetchData(url, 'GET')
     }, [])
  

  const{data, isLoading, error, fetchData }=useFetch()


  return (
    <>
    <h3>Lista de usuarios</h3>
    {isLoading
    ? <h4>Cargando...</h4>
    :error?
      <h4>Cargando...:{error}</h4>
    :
   <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map(user=>{
        return(
        <tr key={user.id}>
          <th scope="row">{user.id}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.website}</td>
        </tr>
        )
    })
    }
    </tbody>
</table>  
}
     </>
  )
}
