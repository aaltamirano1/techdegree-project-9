import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import Form from './Form';
import Navigation from './Navigation';
import Photos from './Photos';
import NotFound from './NotFound';

import axios from 'axios';
const keys = require('./config');

class App extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      cats: [],
      dogs: [],
      comp: [],
      loading: true
    };
  } 

  performSearch = (query = 'coding', selection) => {
    this.setState({loading: true});
    axios.get(`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=${keys.key}&tags=${query}&nojsoncallback=1&per_page=12`)
    .then(res => {
      switch(selection) {
      case'cats':
        this.setState({cats: res.data.photos.photo});
        break;
      case 'dogs':
        this.setState({dogs: res.data.photos.photo});
        break;
      case 'comp':
        this.setState({comp: res.data.photos.photo});
        break;
      default:
        this.setState({imgs: res.data.photos.photo});
      }
      this.setState({loading: false});
      console.log(this.history);
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });
  }
  componentDidMount(){
    this.performSearch();
    this.performSearch('cat','cats');
    this.performSearch('dog', 'dogs');
    this.performSearch('computer', 'comp');
  };
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/search" render={ () => <Form onSearch={this.performSearch}/>} />
          <Navigation onSearch={this.performSearch} />
          <Switch>
            <Route exact path="/" render={ () => <Photos loading={this.state.loading} imgs={this.state.imgs}/>} />
            <Route path="/search" render={ () => <Photos loading={this.state.loading} imgs={this.state.imgs}/>} />
            <Route path="/cats" render={ () => <Photos loading={this.state.loading} imgs={this.state.cats}/>} />
            <Route path="/dogs" render={ () => <Photos loading={this.state.loading} imgs={this.state.dogs}/>} />
            <Route path="/computers" render={ () => <Photos loading={this.state.loading} imgs={this.state.comp}/>} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
