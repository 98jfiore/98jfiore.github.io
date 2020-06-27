import React, { Component } from 'react'
//import logo from './logo.svg';
import './App.css';
import './assets/css/main.css';
import { Header, Banner, Footer, Body} from './components'

class App extends Component {
  render(){
    return (
		<div id="page-wrapper">

			<Header />
					
			<Banner />

			<Body />

			<Footer />

		</div>
    )
  }
}

export default App;