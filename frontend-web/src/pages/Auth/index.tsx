import React from 'react';
import './styles.scss';
import { ReactComponent as MainImage } from '../../core/assets/images/main-image.svg';
import Login from './components/Login';

const Auth = () => (
    <div>
        <nav className=" bg-primary main-nav">
            <div className= "navbar-text">
            <h4>MovieFlix</h4>
            </div>      
        </nav>
   <div className="rota-container">
       <div className="rota-info">
          <h1 className="text-title">Avalie Filmes</h1>
          <p className="text-subtitle">
              Diga o que você achou do seu <br /> filme favorito 
          </p>
            <MainImage className="main-image"/>
       </div>
       <div className="rota-content">
          <Login />
       </div>
   </div>
   </div>
);

export default Auth;