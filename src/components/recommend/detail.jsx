import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail(){
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const content_id = params.get('content_id');
    const [image, setImage] = useState();
    const [overview, setOverview] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/place/${content_id}/`)
          .then(response => {
            const data = response.data;
            setImage(data[0][0]);
            setOverview(data[0][1]);
          });
    }, [content_id]);

    return(
        <div>
            <img src={image}></img>
            <pre style={{whiteSpace:'pre-wrap'}}>{overview}</pre>
        </div>
    );
}
export default Detail;