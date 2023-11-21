import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import './result.css';

const { kakao } = window;

function PlaceList({ x, y, onPlaceSelect }) {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/place/?x=${x}&y=${y}`)
      .then(response => setPlaces(response.data));

      var mapContainer = document.getElementById('map'), 
      mapOption = {
          center: new kakao.maps.LatLng(37.566826, 126.9786567), 
          level: 3
      };      
      var map = new kakao.maps.Map(mapContainer, mapOption); 
      var bounds = new kakao.maps.LatLngBounds();
  
      places.map((place, index) => {
        var position = new kakao.maps.LatLng(place.y, place.x);
        var marker = new kakao.maps.Marker({
          map: map,
          position: position
        });
        var i = index + 1;
        var content = '<div class ="label"><span class="left"></span><span class="center">'+ i +'</span><span class="right"></span></div>';
        var customOverlay = new kakao.maps.CustomOverlay({
          position: position,
          content: content   
        });
        customOverlay.setMap(map);
        bounds.extend(position);
      });
      map.setBounds(bounds);
  }, [x, y, places]);

  return (
    <div>
      {places.length > 0 ? (
        <ul className="list">
          {places.map((place, index) => (
            <li key={index} className="place" onClick={() => onPlaceSelect(place)}>
              <p>{index + 1}. {place.name}</p>
              Rating: {place.rating}<br/>
              Type: {place.type}<br/>
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
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/restaurant/?x=${x}&y=${y}`)
      .then(response => setRestaurants(response.data.result));
  }, [x, y]);

  return (
    <div>
      {restaurants.length > 0 ? (
        <ul className="list">
          {restaurants.map(([name, type], index) => (
            <li key={index} onClick={() => onRestaurantSelect(name)}>
              <h3>{name}</h3>
              <p>{type}</p>
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
      <div id="map" style={{width:'84%', height:'calc(100vh - 80px)', position:'fixed', right:'0px', top:'80px', overflow:'hidden'}}>
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
