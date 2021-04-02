import React,{useContext, useEffect, useState} from 'react';
import "./ToDo.scss"
import { useHistory } from 'react-router';
import ToDo from "./ToDo"
import { AuthContext } from '../context/AuthContext';


function NavigationNavPage(props) {
  const[description, setDescription]=useState("");
  const[todo,setdo]=useState("");
  const history=useHistory();
  const {loggedInState}  = useContext(AuthContext)
  useEffect(() => {
    if(!loggedInState){
       history.push('/advanced')
    }
   }, [loggedInState])
 async function SaveTask(){
    console.warn(description)
    let item={description}
    const token = JSON.parse(localStorage.getItem('login')).token;

   
    let result=await fetch ("https://api-nodejs-todolist.herokuapp.com/task",
    {

      method:'POST',
      headers:{
        "Content-Type": "application/json",
        "Accept":"application/json",
        "Authorization":`Bearer ${token}`,
      },
      body:JSON.stringify(item)
    }

    );
    result =await result.json();
    localStorage.setItem("task",JSON.stringify(result))
    setDescription('')
    NavigationNavPage.reset();

  };
/*
  async function deleteOperation(id){
  let res=await fetch ("https://api-nodejs-todolist.herokuapp.com/task/5ddcd1566b55da0017597239"+id,
  {

    method:'Delete',
    headers:{
      "Content-Type": "application/json",
   
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA4Y2MzZTVhYjQ2ZjAwMTdiOGY2NGUiLCJpYXQiOjE2MTcxMDM5MDJ9.9djKES2nNL5AB503hu0t2NarPKiS5UQwTBOJbnEopws",
    },
    
  }

  );
  res =await res.json();

  console.warn(res)}

*/ 



  return (
    <div className="mt-4 mb-4">
                
                

    <div className="col-sm-6 offset-sm-3">
    <div class="app-container" id="taskList">
    <h1 class="app-header">TO DO LIST</h1>
  <div class="add-task">
    <input type="text" autocomplete="off" placeholder="Add New Task"   onChange={(e)=>setDescription(e.target.value) } className="task-input" />
		<input name="textarea" type="submit" value="" class="submit-task" onClick={SaveTask}  title="Add Task"/>
  </div>
       <br/>
      
      <div></div>
       </div>
<ToDo />
    </div> </div>
  );

}

export default NavigationNavPage