import React from 'react'

import { useState } from 'react';


const Card = ({title,description}) => {

  const[liked,setLiked]=useState(false);
const[count,setcount]=useState(0);


const handleLike=()=>{
  setLiked(!liked);
  setcount(liked?count-1:count+1);
}
  return (
    <article className='card'>
      <img src="vite.svg" className='img' alt={`Thumbnail for ${title}`} />
        <h1>{title}</h1>
        <p>{description}</p>


        <button onClick={handleLike}>
        {/* conditional rendering */}
        {liked?"Unlike":"Like"}({count})
        </button>

        <p>{liked?"You liked this!":"Click the like button"}</p>
    </article>
  );
}

export default Card