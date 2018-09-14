import React from 'react';

import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = props => { 
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
    <ul>
      {imgs}
    </ul> 
  );

}

export default PhotoContainer;