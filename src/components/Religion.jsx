import React from 'react';
import HomePage from './HomePage';

const Religion = () => {
  return (
    <div>
      <HomePage />
      <div className="container">
        <h1>Religion</h1>
        {/* Ici, vous pouvez afficher du contenu spécifique aux actualités */}
        <p>A la Une...</p>
        <ul>
          <li>Article 1</li>
          <li>Article 2</li>
          <li>Article 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Religion;
