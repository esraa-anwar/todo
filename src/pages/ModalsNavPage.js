import React ,{useState} from 'react';
import "./Registeration.css"
import { useHistory } from 'react-router';

import { BrowserRouter, Route, Link } from "react-router-dom";
function ModalsNavPage(props) {
  const [name, setName] = useState("")
const [password,setPassword ] = useState("")
const [email,setEmail ] = useState("")
const [age,setAge ] = useState("")
const history=useHistory();
async function signUp(){
       let newUser={name,password,email,age}
    console.warn(newUser)
    let result =await fetch("https://api-nodejs-todolist.herokuapp.com/user/register",{

    method:'POST',
    body:JSON.stringify(newUser),
    headers:{"Content-Type": "application/json",
"Accept":"application/json",
// "Authorization": localStorage.getItem()
},
    })

    result=await result.json()
 localStorage.setItem("user",JSON.stringify(result))
 history.push('/advanced')
          }

 
        return (
            
                 <div className="col-sm-6 offset-sm-3">
                 <h1 className="text-center mt-4">Sign Up</h1>
           
          
               
<input type="text" className="form-control" placeholder="name" onChange={(e)=>setName(e.target.value)}/>

<br/>
<input type="email" className="form-control"  placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>

<br/>
<input type="password" className="form-control"  placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>

<br/>
<input type="number" className="form-control"  placeholder="age" onChange={(e)=>setAge(e.target.value)}/><br/>
<button  className="btn btn-primary" onClick={signUp}>
Sign Up 
</button>
       
        </div> 
      
        )
    
        }




export default ModalsNavPage