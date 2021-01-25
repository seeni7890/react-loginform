import React,{useState} from 'react';
import LoginForm from './components/LoginForm';


function App() {
  const adminUser ={
    username:"admin",
    password: "admin"
  }

  const [user, setUser] = useState({username:"", password:""});
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);

    if(details.username === adminUser.username && details.password === adminUser.password){
      console.log("logged in")
      setUser({
        username:details.username,
        password:details.password
      });
    }
    else{
      console.log("details do not match")
      setError("details do not match")
    }
  }

  const Logout = () =>{
    setUser({username:"", password:""})
  }
  return (
    <div className="App">
        {(user.password !="") ? (
          <div className="welcome">
            <h2>Welcome,<span>{user.username}</span></h2>
            <button onClick = {Logout}>Logout</button>
          </div>
        ):(
          <LoginForm Login={Login} error={error}/>
        )}
    </div>
  );
}

export default App;
