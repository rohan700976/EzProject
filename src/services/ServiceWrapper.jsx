import React, { useState } from 'react';
import Service from './Service';
import FilmsProduction from './FilmsProduction';

const ServiceWrapper = () => {
  const [showFilmProductionCard, setShowFilmProductionCard] = useState(false);


  const handleLeaveFilmSection = () => {
    setShowFilmProductionCard(false);
  };

  return (
    <div className="relative w-full h-full">
      <div
        className={`transition-opacity duration-[1200ms] ease-in-out ${
          showFilmProductionCard ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Service onMouseEnter={() => setShowFilmProductionCard(true)} />
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out ${
          showFilmProductionCard ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <FilmsProduction onMouseLeave={handleLeaveFilmSection} />
      </div>
    </div>
  );
};

export default ServiceWrapper;
