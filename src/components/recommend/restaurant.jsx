import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';

function Restaurant() {
  const [names, setNames] = useState([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = params.get('x');
  const y = params.get('y');

  useEffect(() => {
    axios.get(`http://localhost:8000/restaurant/?x=${x}&y=${y}`)
      .then(response => setNames(response.data.names));
  }, [x, y]);

  return (
    <div className="restaurant">
        <div className="button-container">
        <Link className="button" to={`/result/?x=${x}&y=${y}`}>관광지</Link>
      </div>
      {names.length > 0 ? (
        names.map((name, index) => (
          <div key={index}>
            <h2>{name}</h2>
          </div>
        ))
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}

export default Restaurant;