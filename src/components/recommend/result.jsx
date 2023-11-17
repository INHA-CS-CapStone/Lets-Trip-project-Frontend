import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import './result.css';

function PlaceList({ x, y, onPlaceSelect }) {
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
            <li key={index} className="place" onClick={() => onPlaceSelect(place)}>
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

function RestaurantList({ x, y, onRestaurantSelect }) {
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
            <li key={index} onClick={() => onRestaurantSelect(name)}>
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

function Planner({ items, onItemRemove }) {
  return (
    <div>
      <div className="planner_name">Planner</div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => onItemRemove(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Result() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = params.get('x');
  const y = params.get('y');
  const type = params.get('type');
  const [plannerItems, setPlannerItems] = useState([]);

  const handlePlaceSelect = place => {
    setPlannerItems(currentItems => [...currentItems, place]);
  };

  const handleRestaurantSelect = name => {
    setPlannerItems(currentItems => [...currentItems, { name }]);
  };

  const handleItemRemove = index => {
    setPlannerItems(currentItems => currentItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="list_wrap">
        <div className="selecting">
          <div className="result-button-container">
            <ul>
              <li>
                <Link className="button" to={`/result?type=place&x=${x}&y=${y}`}>관광지</Link>
              </li>
              <li>
                <Link className="button" to={`/result?type=restaurant&x=${x}&y=${y}`}>음식점</Link>  
              </li>
            </ul>
          </div>
          {type === 'place'
            ? <PlaceList x={x} y={y} onPlaceSelect={handlePlaceSelect} />
            : <RestaurantList x={x} y={y} onRestaurantSelect={handleRestaurantSelect} />}
        </div>
      </div>
      <div className="planner">
        <Planner items={plannerItems} onItemRemove={handleItemRemove} />
      </div>
    </div>
  );
}

export default Result;
