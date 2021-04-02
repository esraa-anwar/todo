import React,{useState} from 'react';
import axios from "axios"
import "./ToDo.scss"
class ToDo extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data:[],
      shouldHide: false 
    }
  }

  componentDidMount() {
    const token = JSON.parse(localStorage.getItem('login'))?.token;
    axios.get("https://api-nodejs-todolist.herokuapp.com/task",{

      headers:{
        "Authorization":`Bearer ${token}`,
        "Content-Type":"application/json"
      }
      
          })
    .then(response => {
      console.log(response.data);
      this.setState({data:[...response.data.data]}, () => {
        console.log(this.state.data)
        const {data} = this.state;
        console.log(data);
        console.log(typeof data)
      });
    })
    .catch(error => {
      console.log(error);
    });

   
    

  };


 /* delTodo = id => {
    const token = JSON.parse(localStorage.getItem('login')).token;
    axios.delete("https://api-nodejs-todolist.herokuapp.com/task/5ddcd1566b55da0017597239"+id,{
     
    
      headers:{
        "Authorization":`Bearer ${token}`,
        "Content-Type":"application/json"
      },
    }).then((result) =>{result.json().then((resp)=>{
      console.warn(todo._id)
      this.setState({
        data: [...this.state.data.filter(todo => todo._id !== id)]
      })
    })}
   
    );

  };*/

  deleteTodo(todoId){
    const token = JSON.parse(localStorage.getItem('login')).token;
    fetch('https://api-nodejs-todolist.herokuapp.com/task/' + todoId, {
        method: 'DELETE',
        headers:{
          "Authorization":`Bearer ${token}`,
          "Content-Type":"application/json"
        },
      
    }).then((res) => 
    {res.json().then((res)=>{
      console.log(res.data)
      this.setState({
        data: [...this.state.data.filter(todo => todo._id !== todoId)]
      })
    })}
   
    );
}


  render() {
  
    return (
     
      <div>
    

        <div className="app-container" id="taskList">
  
  <ul className="task-list">
		
		
        {this.state.data.length > 0 ? 
       <>
       { this.state.data.map(todo => (
    
        <li className="task-list-item" key={todo._id}>
			<label className="task-list-item-label">
        <input type="checkbox"/>
        <span>  
         
            {todo.description}
            </span>
            </label>
			<span  className="delete-btn" title="Delete Task"  onClick={this.deleteTodo.bind(this, todo._id)}></span>
		</li>
        ))}
        </>
        :
  null
        }

       
		
	</ul>
</div>




     
      </div>
    );
  }
}

export default ToDo
























/*


import React,{useState} from 'react';
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:[]     
    };
  }

  componentDidMount() {
    fetch("https://api-nodejs-todolist.herokuapp.com/task",{
      method:"GET",
      headers:{
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA4Y2MzZTVhYjQ2ZjAwMTdiOGY2NGUiLCJpYXQiOjE2MTcxMDM5MDJ9.9djKES2nNL5AB503hu0t2NarPKiS5UQwTBOJbnEopws",
        "Content-Type":"application/json"
      }
      
          })
      .then(response => response.json())
      .then(task => {
        const data2 = task.results;
        this.setState({
           data: data2
          
          });
      });
    
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Floyd's API Call</h1>
        
        </header>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>UserName</th>
               
              </tr>
            </thead>
          
          </table>
        </div>
      </div>
    );
  }
}




export default Todo*/