import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Auth from './pages/Auth';
import history from './core/utils/history';
import Movie from './pages/Movie';
import MovieId from './pages/MovieId/components/MovieDetails';


const Routes = () => (
   <Router history={history}>
      <Switch>
          <Route path="/" exact>
             <Auth />
          </Route>
          <Route path="/movies" exact>
             <Movie />
          </Route>
          <Route path="/movies/:movieId">
             <MovieId />
          </Route>
      </Switch>
   </Router>
);

export default Routes;