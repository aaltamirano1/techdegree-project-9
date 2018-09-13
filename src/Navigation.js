import React, { Component } from 'react';

class Navigation extends Component { 
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(e.target.innerHTML);
  }

  render(){
	return (
    <nav className="main-nav">
      <ul>
        <li><a href='#' onClick={this.handleSubmit}>Cats</a></li>
        <li><a href='#'onClick={this.handleSubmit} >Dogs</a></li>
        <li><a href='#'onClick={this.handleSubmit}>Computers</a></li>
      </ul>
    </nav>
	);
	}

}

export default Navigation;