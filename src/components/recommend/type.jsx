import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./type.css";

function Type() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const navigate = useNavigate();

  const handleTypeClick = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== type));
    } else if (selectedTypes.length < 2) {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleNextClick = () => {
    if (selectedTypes.length < 1) {
      alert("선호하는 관광타입을 선택해 주세요.");
    } else {
      navigate("/hashtag", { state: { selectedTypes } });
    }
  };

  const tourismTypes = ["자연", "역사", "문화", "쇼핑", "레포츠"];

  return (
    <div className="type_wrap">
      <h1>선호하는 관광타입을 선택해 주세요!</h1>
      <p>최대 2개까지 선택 가능합니다.</p>
      <br/>
      <br/>
      {tourismTypes.map((type) => (
        <button
          key={type}
          className={selectedTypes.includes(type) ? "selected" : ""}
          onClick={() => handleTypeClick(type)}
        >
          {type}
        </button>
      ))}
      <div className="button-container">
        <button onClick={handleNextClick}>다음</button>
      </div>
    </div>
  );
}

export default Type;