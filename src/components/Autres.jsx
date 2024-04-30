import React from 'react';
import HomePage from './HomePage';

const Autres = () => {
  return (
    <div>
      <HomePage />
      <div className="container">
        <h1>Autres</h1>
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

export default Autres;
