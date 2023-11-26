import React, { useEffect, useState } from "react";
import axios from "axios";
import "./planners.css";

function Planners() {
  const [planners, setPlanners] = useState([]);

  const deletePlanner = (id) => {
    axios.delete(`http://localhost:8000/planner/${id}/`)
      .then(() => {
        setPlanners(planners.filter(planner => planner.id !== id));
      });
  }
  
  useEffect(() => {
    axios.get('http://localhost:8000/planner/')
      .then((response) => {
        setPlanners(response.data);
      });
  }, []);

  return (
    <div className="share-container">
      <h1>직접 만든 여행 플래너를 한눈에!</h1>
      <p>
        자신의 취향이 반영된 특별한 플래너를 한눈에 확인해보세요. <br />
        여행의 감동을 다시 한번 느껴보세요.
      </p>

      <p>
        - 추천받은 다양한 관광지들로 만들어진 당신만의 플래너에서 새로운 발견을 찾아보세요.
        <br />
        - 직접 선택한 장소들을 확인하고 특별한 여행 경험을 다시 한번 떠올려 보세요.
        <br />
        - 여러 플래너를 한눈에 비교하며, 앞으로의 여행 계획에 참고하세요.
      </p>

      <div className="planner-card">
        {planners.map((planner, index) => (
          <div key={index} className="share-planner">
            <p>Planner</p>
            <button onClick={() => deletePlanner(planner.id)}>×</button>
          <ul>
            {planner.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Planners;
