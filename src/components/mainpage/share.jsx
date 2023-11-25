import React, { useEffect, useState } from "react";
import axios from "axios";
import "./share.css";

function Share() {
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
      <h1>다양한 여행자의 플래너를 살펴보세요!</h1>
      <p>
        여러 여행자들이 만든 특별한 플래너를 만나보세요. <br />
        여행의 다양한 얼굴을 만나고, 새로운 경험을 즐겨보세요.
      </p>

      <div className="travel-advantages">
        <p>
          - 다양한 관광지 조합으로 새로운 경험과 발견의 기회가 늘어납니다.
          <br />
          - 지역 사람들이 선택한 플래너를 통해 현지에서만 누릴 수 있는 특별한
          경험을 만날 수 있습니다.
          <br />- 여러 플래너를 비교하며 자신만의 최적의 일정을 계획할 수 있어
          더욱 효율적인 여행이 가능합니다.
        </p>
      </div>

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

export default Share;
