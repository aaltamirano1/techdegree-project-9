import React from 'react';

const Photo = props => { 
	return (
	  <li>
	    <img src={props.url} alt={props.name} />
	  </li>
  );

}

export default Photo;