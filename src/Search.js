import React from 'react';

import Form from './Form';
import Navigation from './Navigation';
import Photos from './Photos';

const Search = props => { 

  return(
    <div className="container">
      <Form onSearch={props.onSearch}/>
      <Navigation onSearch={props.onSearch} />
      <Photos loading={props.loading} imgs={props.imgs}/>
    </div>  );

}

export default Search;