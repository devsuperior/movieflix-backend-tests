import React, { useCallback, useEffect, useState } from 'react';
import './styles.scss';
import Navbar from '../../core/components/Navbar';
import MovieCard from './components/MovieCard';
import MovieFilters, { FilterForm } from '../../core/components/MovieFilters';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MoviesResponse } from '../../core/types/Movie';
import { makeRequest } from '../../core/utils/request';
import Pagination from '../../core/components/Pagination';
import MovieCardLoader from './components/Loaders/MovieCardLoader';

const Movie = () => {
   const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();   
   const [activePage, setActivePage] = useState(0);
   const [isLoading, setIsLoading] = useState(false);
   

useEffect(() => {
  axios('http://localhost:3000/movies')
     .then(response => console.log(response));
}, []);

const getMovies = useCallback((filter?: FilterForm) => {
   const params = {
       page: activePage,
       linesPerPage: 4,
       genreId: filter?.genreId
   }
   // iniciar o loader
   setIsLoading(true);
   makeRequest({ url: '/movies', params })
       .then(response => setMoviesResponse(response.data))
       .finally(() => {
       // finalizar o loader
       setIsLoading(false);
       })
}, [activePage]);

useEffect(() =>{
   getMovies();
}, [getMovies]);

return (
   <div>
      <div>
         <Navbar />   
      </div>
      <div className="movie-filters-container">
         <div className="filter-select-container">
             <MovieFilters onSearch={filter => getMovies(filter)}/>
         </div>   
      </div>
      <div className="movie-container">  
            {isLoading ? <MovieCardLoader /> : (
                moviesResponse?.content.map(movie => (
                  <Link to={`/movies/${movie.id}`} key={movie.id}>
                     <MovieCard movie={movie} />
                  </Link>
               ))
            )}
      </div>   
      <div className="container-paginacao"> 
         {moviesResponse && (
            <Pagination 
               totalPages={moviesResponse.totalPages}
               activePage={activePage}
               onChange={page => setActivePage(page)}
            /> 
         )}
      </div> 
   </div>
);
}
export default Movie;