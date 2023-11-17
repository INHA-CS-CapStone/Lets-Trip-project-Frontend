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
    <div className="list_wrap">
      <div className="selecting">
        <div className="button-container">
          <ul>
            <li>
              <Link className="button" to={`/result/?x=${x}&y=${y}`}>관광지</Link>
            </li>
            <li>
              <Link className="button" to={`/restaurant/?x=${x}&y=${y}`}>음식점</Link>  
            </li>
          </ul>
        </div>
        {places.length > 0 ? (
          <ul className="list">
          {places.map((place, index) => (
            <li key={index} className="place">
              <p>{place.name}</p>
              Rating: {place.rating}<br/>
              Review Count: {place.review_count}<br/>
              Type: {place.type}
            </li>
          ))}
        </ul>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </div>
  );
}

export default Result;
