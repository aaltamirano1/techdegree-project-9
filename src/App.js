import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Navigation from './Navigation';
import Photos from './Photos';

import axios from 'axios';
const keys = require('./config');

class App extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      loading: true
    };
  } 
  performSearch = (query = 'coding') => {
    axios.get(`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=${keys.key}&tags=${query}&nojsoncallback=1&per_page=4`)
    .then(res => {
      this.setState({
        imgs: res.data.photos.photo,
        loading: false
      });
      console.log(this.state);
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });
  }
  componentDidMount(){
    this.performSearch();
  };
  render() {
    return (
      <div className="container">
        <Form onSearch={this.performSearch}/>
        <Navigation onSearch={this.performSearch} />
        {
          this.state.loading ?
          <p>Loading...</p> :
          <Photos data={this.state.imgs}/>
        }
        

      </div>
    );
  }
}

export default App;
