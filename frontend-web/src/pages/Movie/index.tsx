import React, { useEffect, useState } from 'react';
import './styles.scss';
//import { Review, MoviesResponse } from '../../core/types/Movie';
//import { ReactComponent as MainImage } from '../../core/assets/images/main-image.svg';
import Navbar from '../../core/components/Navbar';
import MovieCard from './components/MovieCard';
import MovieFilters from '../../core/components/MovieFilters';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MoviesResponse } from '../../core/types/Movie';
import { makeRequest } from '../../core/utils/request';

//import ButtonIcon from '../core/components/ButtonIcon';
//import { Link } from 'react-router-dom';
//import { title } from 'process';
//import Login from '../Auth/components/Login';


const Movie = () => {
   const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();   

   console.log(moviesResponse);

useEffect(() => {
  axios('http://localhost:3000/movies')
     .then(response => console.log(response));
}, []);

useEffect(() => {
   const params = {
      page: 0,
      linesPerPage: 4
   }

   makeRequest({ url: '/movies', params})
      .then(response => setMoviesResponse(response.data));
}, [])

return (
   <div>
      <div>
         <Navbar />   
      </div>
      <div>
         <MovieFilters />
      </div>
      <div className="movie-container">   
         {moviesResponse?.content.map(movie => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
               <MovieCard movie={movie} />
            </Link>
         ))}
         
      </div>   
      
      <div className="container-paginacao"> 
         <h1>paginacao</h1>
      </div>
      
   </div>
);
}

export default Movie;