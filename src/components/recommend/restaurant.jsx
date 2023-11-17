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
    </div>
  );
}

export default Restaurant;