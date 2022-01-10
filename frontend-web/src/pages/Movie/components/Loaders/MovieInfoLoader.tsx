import React from 'react';
import ContentLoader from 'react-content-loader';

const MovieInfoLoader = () => (
  <ContentLoader 
  speed={1}
  width={450}
  height={300}
  viewBox="0 0 450 250"
  backgroundColor="#6C6C6C"
  foregroundColor="#d6d2d2"
>
  <rect x="40" y="40" rx="4" ry="4" width="450" height="300" />
</ContentLoader>
)

export default MovieInfoLoader;