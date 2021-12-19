import React, { useEffect, useState } from 'react';
import './styles.scss';
//import { ReactComponent as ImageDetail } from '../../../../core/assets/images/imageDetail.svg';
import { ReactComponent as ImageStar } from '../../../../core/assets/images/image-star.svg';
import Navbar from '../../../../core/components/Navbar';
import ButtonLogin from '../../../../core/components/ButtonLogin';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { makeRequest } from '../../../../core/utils/request';
import { Movie } from '../../../../core/types/Movie';

type ParamsType = {
   movieId: string,
}

const MovieDetails = () => { 
   const { movieId } = useParams<ParamsType>();
   const [movie, setMovie] = useState<Movie>();

   console.log(movieId);

   useEffect(() => {
      axios('http://localhost:3000/movies')
         .then(response => console.log(response));
    }, []);

    useEffect(() => {
       makeRequest({ url: `/movies/${movieId}`})
         .then(response => setMovie(response.data));
    }, [movieId]);

   return(
      <div>
         <div>
         <Navbar />
         </div>
         
         <div className="movie-container-description"> 
            <div className="movie-card-description">
               <div className="row">
                  <div className="col-6">
                      <img src={movie?.imgUrl} alt={movie?.title} className="movie-description-image"/>
                  </div>
                  <div className="col-6">
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
                  </div> 
               </div>     
            </div>
            
            <div className="movie-card-input">
               <input 
                  type="text" 
                  className="movie-input"
                  placeholder="Deixe sua avaliação aqui"
                  name="text"
               />
               <div className="save-button">
                  <ButtonLogin text="SALVAR AVALIAÇÃO" />
               </div>
            </div>
            <div className="movie-card-review">
               <div>
                  {movie?.reviews.map(review => (
                     <div>
                        <div >
                           <div className="row-review">
                              <div>   
                                 <ImageStar className="image-star"/>
                              </div>
                              <div 
                                 className="name-review">{review.name}
                              </div>
                           </div>
                        </div>
                        <div
                           className="title">{review.text}
                        </div>
                     </div>
                  ))}
               </div>
               
               
                 
            </div>
         </div>
      </div>
   );
}
export default MovieDetails;