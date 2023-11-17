import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link, Routes, Route } from 'react-router-dom';
import './result.css';

function PlaceList({ x, y }) {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/place/?x=${x}&y=${y}`)
      .then(response => setPlaces(response.data));
  }, [x, y]);

  return (
    <div>
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
  );
}

function RestaurantList({ x, y }) {
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/restaurant/?x=${x}&y=${y}`)
      .then(response => setNames(response.data.names));
  }, [x, y]);

  return (
    <div>
      {names.length > 0 ? (
        <ul className="list">
          {names.map((name, index) => (
            <li key={index}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}

function Result() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = params.get('x');
  const y = params.get('y');
  const type = params.get('type');

  return (
    <div className="list_wrap">
      <div className="selecting">
        <div className="button-container">
          <ul>
            <li>
              <Link className="button" to={`/result?type=place&x=${x}&y=${y}`}>관광지</Link>
            </li>
            <li>
              <Link className="button" to={`/result?type=restaurant&x=${x}&y=${y}`}>음식점</Link>  
            </li>
          </ul>
        </div>
        {type === 'place' ? <PlaceList x={x} y={y} /> : <RestaurantList x={x} y={y} />}
      </div>
    </div>
  );
}


export default Result;
