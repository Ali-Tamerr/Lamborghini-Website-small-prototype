import React from 'react';

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div id="loading-screen">
      <div id="loading-content">
        <div id="loading-spinner"></div>
        <p>Loading Experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
