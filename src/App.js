import React , { Component }from 'react';
import CardList from './CardList'
import { robots } from './robots';
import SearchBox from './SearchBox';

import './App.css'

const status = {
	robots : robots,
	searchfield: ''
}
class App extends Component{
	
  render(){
    return (
    <div className ='app tc'>
    	<SearchBox />
    	<CardList robots = { status.robots } />
    </div>
  );
  }
}

export default App;
