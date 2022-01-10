import React, { useEffect, useState } from 'react';
import './styles.scss';

import { ReactComponent as ImageStar } from '../../../../core/assets/images/image-star.svg';
import Navbar from '../../../../core/components/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { makeRequest } from '../../../../core/utils/request';
import { Movie } from '../../../../core/types/Movie';
import MovieInfoLoader from '../../../Movie/components/Loaders/MovieInfoLoader';
import MovieDescriptionLoader from '../../../Movie/components/Loaders/MovieDescriptionLoader';
import MovieReviewLoader from '../../../Movie/components/Loaders/MovieReviewLoader';
import Form from '../Form';
import { isAllowedByRole } from 'core/utils/auth';

type ParamsType = {
   movieId: string,
}

const MovieDetails = () => {
   const { movieId } = useParams<ParamsType>();
   const [movie, setMovie] = useState<Movie>();
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      axios(`http://localhost:8080/movies/${movieId}`)
         .then(response => console.log(response));
   }, []);

   useEffect(() => {
      setIsLoading(true);
      makeRequest({ url: `/movies/${movieId}` })
         .then(response => setMovie(response.data))
         .finally(() => setIsLoading(false));
   }, [movieId]);

   return (
      <div>
         <div>
            <Navbar />
         </div>

         <div className="movie-container-description">
            <div className="movie-card-description">
               <div className="row">
                  <div className="col-6">
                     {isLoading ? <MovieInfoLoader /> : (
                        <>
                           <img src={movie?.imgUrl} alt={movie?.title} className="movie-description-image" />
                        </>
                     )}

                  </div>
                  <div className="col-6">
                     {isLoading ? <MovieDescriptionLoader /> : (
                        <>
                           <div className="movie-description-title">
                              {movie?.title}
                           </div>
                           <div className="movie-description-year">
                              {movie?.year}
                           </div>
                           <div className="movie-description-subTitle">
                              {movie?.subTitle}
                           </div>
                           <div className="movie-description-box">
                              <p className="movie-description-textbox">
                                 {movie?.synopsis}
                              </p>
                           </div>
                        </>
                     )}

                  </div>
               </div>
            </div>
           
            <div className="movie-card-input">
               {isAllowedByRole (['ROLE_MEMBER']) && (
                     <>
                        <Form />
                     </>
               )}
               </div>
            
            <div className="movie-card-review">
               {isLoading ? <MovieReviewLoader /> : (
                  <>
                     {movie?.reviews.map(review => (
                        <div>
                           <div >
                              <div className="row-review">
                                 <div>
                                    <ImageStar className="image-star" />
                                 </div>
                                 <div
                                    className="name-review">{review.userId.name}
                                 </div>
                              </div>
                           </div>
                           <div
                              className="title">{review.text}
                           </div>
                        </div>
                     ))}
                  </>
               )}


            </div>
         </div>
      </div>
   );
}
export default MovieDetails;