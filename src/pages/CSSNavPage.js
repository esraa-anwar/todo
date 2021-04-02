import React, { Component } from 'react'

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput, FormPage
} from "mdbreact";

class CSSNavPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      logo:'',
      welcome_message:'',
      name: '',
      id: '',
     
    };
    
  }
   componentDidMount() {
     // get all entities - GET
    fetch("https://api-nodejs-todolist.herokuapp.com/user/register", {
       "method": "POST",
    
     })
     .then(response => response.json())
    .then(response => {
       this.setState({
        friends: response
       })
       console.log(this.state.friends)
    })
    
     .catch(err => { console.log(err); 
     });
     console.log(this.state.friends)
   }
  create(e) {
    // add entity - POST
    e.preventDefault();
    // creates entity
    fetch("https://api-nodejs-todolist.herokuapp.com/user/register", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
        
      },
      "body": JSON.stringify({
        name: this.state.name,
        notes: this.state.id
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }
  update(e) {
    // update entity - PUT
    e.preventDefault();
    // this will update entries with PUT
    fetch("https://api-nodejs-todolist.herokuapp.com/user/register", {
        "method": "PUT",
        "headers": {
            "x-rapidapi-host": "fairestdb.p.rapidapi.com",
            "x-rapidapi-key": API_KEY,
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": JSON.stringify({
            _id: this.state.id,
            name: this.state.name,
            notes: this.state.notes
        })
        })
        .then(response => response.json())
        .then(response => { console.log(response);
        })
        .catch(err => { console.log(err); });
  }

  handleChange(changeObject) {
    this.setState(changeObject)
    
  }
  
  render() 
  
  
  {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
             
              <form className="d-flex flex-column">
                <legend className="text-center">Add-Update-Delete Friend</legend>
                <label htmlFor="name">
                  Friend Name:
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="notes">
                  Friend notes:
                  <input
                    name="notes"
                    id="notes"
                    type="test"
                    className="form-control"
                    value={this.state.massage}
                    onChange={(e) => this.handleChange({ notes: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="id">
                  Friend ID:
                  <input
                    name="id"
                    id="id"
                    type="text"
                    className="form-control"
                    value={this.state.id}
                    onChange={(e) => this.handleChange({ id: e.target.value })}
                    />
                </label>
                <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                  login 
                </button>
               
              
              </form>
            </div>
          </div>
        </div>
    );
  }
}
export default CSSNavPage