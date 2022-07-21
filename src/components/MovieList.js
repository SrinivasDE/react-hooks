import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = () => {
    const [movies,setMovies] = useState([
        {name: "Money Heist",
        id:2314,
        price:'$15'},
        {name: "Game of Thrones",
        id:2322,
        price:'$12'},
        {name: "Lost in Space",
        id:2344,
        price:'$12'}

    ])
  return (
    <div>
        {movies.map((e) => (
            <Movie name={e.name} id={e.id} price={e.price} />
            // <li>{e.name}</li>
        ))}
    </div>
  )
}

export default MovieList;