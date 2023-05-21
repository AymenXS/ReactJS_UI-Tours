import React from 'react';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok === true) {
        setTours(data);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const removeTour = (id) => {
    const newTourArr = tours.filter((tour) => tour.id !== id);
    setTours(newTourArr);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} getTours={getTours} />
    </main>
  );
};
export default App;
