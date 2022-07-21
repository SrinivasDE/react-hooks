import React from 'react';

const Movie = ({name, id, price}) => {
  return (
    <div>
        <center>
        <h2>{name}</h2>
        <h2> {id}</h2>
        <h2>{price}</h2>
        </center>
    </div>
  )
}

export default Movie;