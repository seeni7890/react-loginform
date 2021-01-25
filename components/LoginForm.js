import React,{useState} from 'react'

const LoginForm = ({Login , error}) => {
     const [details, setDetails] = useState({name:"", password:""})

    const submitHandler = e =>{
        e.preventDefault();

        Login(details)
    }

    return (
      <form onSubmit = {submitHandler}>
          <div className = "form-inner">
              <h2>Login</h2>
              {error !="" ? (<div className="error">{error}</div>) : ""}
              <div className="form-group">
                  <label htmlFor="username">User name:</label>
                  <input type="text" name="username" id="name"onChange = {e => setDetails({...details, username:e.target.value})} value = {details.username}/>
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" name="password" id="password" onChange = {e => setDetails({...details, password:e.target.value})} value = {details.password}/>
              </div>
              <input type="submit" value="Login"/>
          </div>
      </form>
    )
}

export default LoginForm
