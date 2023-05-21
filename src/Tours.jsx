import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour, getTours }) => {
  return tours.length === 0 ? (
    <div className="title">
      <h2>No Tours Left</h2>
      <button className="delete-btn btn" onClick={getTours}>
        Refresh
      </button>
    </div>
  ) : (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
