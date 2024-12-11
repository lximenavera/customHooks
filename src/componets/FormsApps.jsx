
import { useForms } from '../hooks/useForms'

export const FormsApps = () => {

    const inicialForms={
        username:'',
        email:'',
        password:''
    }

   const {username, email, password, onInputChange}=useForms(inicialForms)
   
    const handleSubmit=(event)=> {
        event.preventDefault()
        console.log(formState)
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input 
            type="username" 
            className="form-control" 
            id="username"
            name='username'
            value={'username'}
            onChange={onInputChange}
            />
      
    </div>
    <div className="mb-3">
      <label htmlFor="userName" className="form-label">Email</label>
      <input 
          type="email" 
          className="form-control" 
          id="email"
          name='email'
          value={'email'}
          onChange={onInputChange}
          />
      
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input 
          type="password" 
          className="form-control" 
          id="password"
          name='password'
          value={'password'}
         onChange={onInputChange}
         />
      </div>
   
       <button type="submit" className="btn btn-primary">Submit</button>
  </form> <div>FormsApps</div>

  
    </>
  )
}
