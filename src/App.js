import React, { Component } from 'react';
import axios from 'axios';

import '../src/styles/App.css';
import UserCard from './Components/UserCard';


class App extends Component {
  constructor(){
    super()
    this.state ={
      arrayOfUsers: [],
    };
  };

  componentDidMount(){
    this.fetchData();
  };

  fetchData(){
    axios.get("https://randomuser.me/api?results=25")
    .then((res) => {
      const arrayOfUsers = res.data.results;
      console.log(arrayOfUsers)
      this.setState({arrayOfUsers});
    })
  };

  


  // componentDidMount(){
  //   axios.get("https://randomuser.me/api?results=25").then((res) => {
  //     const arrayOfUsers = res.data.results;
  //     console.log(arrayOfUsers)
  //     this.setState({ arrayOfUsers })
  //   });
  // }
        


  render(){
    return(
      <div className='App'>
        <header className='App-Header'>
          <ol className='ListHolder'>
            {this.state.arrayOfUsers.map((user, index) => {
              return(
                <UserCard
                key={index} 
                picture={user.picture}
                name={user.name}
                phone={user.phone}
                email={user.email}
                Age={user.dob.age}
                />
              )
            })}
          </ol>
        </header>
      </div>
    )
  }

}

export default App;
