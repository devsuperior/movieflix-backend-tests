import React from 'react';
import './styles.scss';

const MovieFilters = () => {
   
    return (
        <div className="movie-filters-container">
            <input 
                  type="text" 
                  className="input-search"
                  placeholder="Aventura"
                  name="text"
               />   
        </div>
    )
}

export default MovieFilters;
