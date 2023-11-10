import { Link } from "react-router-dom";
import { useState } from "react";

function Typecheck(){
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeClick = (type) => {
    if (selectedTypes.includes(type)){
      setSelectedTypes(selectedTypes.filter(item => item !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  }
  const handleCompleteClick = () => {
    alert(`선택 완료! 선택된 타입: ${selectedTypes.join(', ')}`);
  }

  const tourismTypes = ['자연', '역사', '문화', '쇼핑', '레포트'];

  return (
    <div className="selecting">
      <h1>선호하는 관광타입을 선택해주세요!</h1>
      {tourismTypes.map(type => (
        <button
          key={type}
          className={selectedTypes.includes(type) ? 'selected' : ''}
          onClick={() => handleTypeClick(type)}
        >
          {type}
        </button>
      ))}
      <Link to="/hashtag"><button onClick={handleCompleteClick}>선택 완료!</button></Link>
    </div>
  );
}

export default Typecheck