import React from 'react';
import ContentLoader from 'react-content-loader';

const MovieReviewLoader = () => (
  <ContentLoader 
  speed={1}
  width={1000}
  height={200}
  viewBox="0 0 450 250"
  backgroundColor="#6C6C6C"
  foregroundColor="#d6d2d2"
>
  <rect x="40" y="0" rx="4" ry="4" width="450" height="300" />
</ContentLoader>
)

export default MovieReviewLoader;