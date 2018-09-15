import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component { 
  
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.location.pathname);
    this.props.onSearch(e.target.innerHTML);

  }

  render(){
	return (
    <nav className="main-nav">
      <ul>
        <li><Link to="/cats">Cats</Link></li>
        <li><Link to="/dogs" >Dogs</Link></li>
        <li><Link to="/computers">Computers</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
	);
	}

}

export default Navigation;