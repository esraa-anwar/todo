import React,{useState, useContext} from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContext';

function AdvancedNavPage(props) {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const {loggedInState, setLoggedInState} = useContext(AuthContext)
  const history=useHistory();
 async function login(){
    console.warn(email,password)
    let item={email,password}
    let result=await fetch ("https://api-nodejs-todolist.herokuapp.com/user/login",
    {

      method:'POST',
      headers:{
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    }
    
    );
    result =await result.json();
    setLoggedInState(true);
    localStorage.setItem("login",JSON.stringify(result))
    history.push("/navigation")
  };
  return (
    <div>


    <div className="col-sm-6 offset-sm-3">
    <h1 className="text-center">Login Page</h1>
       <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" />
       <br/>
       <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" />
       <br/>
       <button onClick={login} className="btn btn-primary">Login</button>
       </div>

    </div>
  );
}

export default AdvancedNavPage;