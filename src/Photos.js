import React from 'react';

import Photo from './Photo';
import NotFound from './NotFound';

const Photos = props => { 
  const results = props.data;
  let imgs;
  if (results.length > 0){
    imgs = results.map(img=> {
      var url = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
      return <Photo url={url} name={img.title} key={img.id}/>
    });
  }else{
    imgs = <NotFound />
  }

  return(
    <div className="photo-container">
        <h2>Results</h2>
    <ul className="gif-list">
      {imgs}
    </ul> 
    </div>
  );
}

export default Photos;
