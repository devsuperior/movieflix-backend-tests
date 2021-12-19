import React from 'react';
import './styles.scss';
import { Movie } from '../../../../core/types/Movie';

type Props = {
    movie: Movie ;
}

const MovieCard = ({ movie }: Props) => {
    return(
    <div className="card-base movie-card">
        <div className="card-base movie-card-image">
            <img src={movie.imgUrl} alt={movie.title} className="movie-card-image"/>
        </div>
        <h6 className="card-title">
            {movie.title}
        </h6>
        <h4 className="card-year">
            {movie.year}
        </h4>
        <h4 className="card-subtitle">
            {movie.subTitle}
        </h4>
    </div>
   
);
}
export default MovieCard;