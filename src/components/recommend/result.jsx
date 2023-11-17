import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import './result.css';

function Result() {
  const [places, setPlaces] = useState([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = params.get('x');
  const y = params.get('y');

  useEffect(() => {
    axios.get(`http://localhost:8000/place/?x=${x}&y=${y}`)
      .then(response => setPlaces(response.data));
  }, [x, y]);

  return (
    <div className="selecting">
      <div className="button-container">
        <Link className="button" to={`/restaurant/?x=${x}&y=${y}`}>음식점</Link>
      </div>
      {places.length > 0 ? (
        places.map((place, index) => (
          <div key={index}>
            <h2>{place.name}</h2>
            <p>Rating: {place.rating}</p>
            <p>Review Count: {place.review_count}</p>
            <p>Type: {place.type}</p>
          </div>
        ))
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}

export default Result;
