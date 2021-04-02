import React, { Component } from 'react'
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: {}
    };
  }
 
  componentDidMount() {
    // get all entities - GET
   
   /*fetch("http://192.168.1.107:8000/schools/teq", {
      "method": "GET",
      "mode": "no-cors"
   
    })
    
    .then(response => response.json())
   .then(response => {
      this.setState({
       items: response,
       isLoaded:true
      })
   })
   
    .catch(err => { console.log(err)
    });*/
    fetch('http://192.168.1.107:8000/schools/teq', {
      "method": "GET",
      "mode": "no-cors"
   
    })
    .then(function(response) {
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
  }

  render() {
    const { error, isLoaded} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>not loaded</div>;
    } else {
      return (
   
          
        <div>{this.state.items}</div>
      );
    }
  }
}
export default HomePage