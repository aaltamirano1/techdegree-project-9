import React from 'react';
import PhotoContainer from './PhotoContainer';

const Photos = props => { 
  return(
    <div className="photo-container">
      <h2>Results</h2>
      {
        props.loading ?
        <p>Loading...</p> :
        <PhotoContainer data={props.imgs}/>
      }
    </div>
  );
}

export default Photos;
