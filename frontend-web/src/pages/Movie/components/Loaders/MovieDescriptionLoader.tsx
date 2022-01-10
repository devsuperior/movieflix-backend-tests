import React from 'react';
import ContentLoader from 'react-content-loader';

const MovieDescriptionLoader = () => (
  <ContentLoader
    speed={1}
    width="100%"
    height={360}
    backgroundColor="#6C6C6C"
    foregroundColor="#d6d2d2"
  >
    <rect x="237" y="80" rx="2" ry="2" width="353" height="24" />
    <rect x="240" y="40" rx="2" ry="2" width="386" height="24" />
    <rect x="240" y="120" rx="2" ry="2" width="295" height="24" />
    <rect x="240" y="120" rx="2" ry="2" width="295" height="24" />
    <rect x="240" y="160" rx="2" ry="2" width="243" height="24" />
    <rect x="240" y="160" rx="2" ry="2" width="243" height="24" />
    <rect x="240" y="200" rx="2" ry="2" width="163" height="24" />
  </ContentLoader>
)

export default MovieDescriptionLoader;