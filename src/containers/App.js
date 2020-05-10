import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
// import {robots} from './robots';
import Scroll from '../components/Scroll.js';
import './App.css';



class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    // this.setState({robots: robots});
    // console.log("check checsk");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
    // console.log(event.target.value);
  }

  render(){

    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) =>{
      return( robot.name.toLowerCase().includes(searchfield.toLowerCase()));
    });

    return !robots.length ?    
      (<div>
        <h1 className='tc'>Loading!!!!</h1>
      </div>) :
      
     (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots = {filteredRobots} />
        </Scroll>
      </div>
    );
  }



}

export default App;
