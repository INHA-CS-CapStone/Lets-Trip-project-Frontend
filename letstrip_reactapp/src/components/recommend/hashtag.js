import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Hashtag() {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(item => item !== tag));
    } else if (selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  const handleCompleteClick = () => {
    alert(`선택 완료! 선택된 타입: ${selectedTags.join(', ')}`);
  }

  const tagNames = [
    '#힐링', '#포토존', '#재밌는', '#아름다운', '#조용한', '#전통적', 
    '#경치', '#특별한', '#웅장한', '#놀거리', '#활기찬', '#예술적',
    '#산책', '#신기한', '#도심의'
  ];

  return (
    <div className="selecting">
      <h1>선호하는 여행지 키워드를 선택해주세요!</h1>
      <p>최대 5개까지 선택 가능합니다.</p>
      {tagNames.map(tag => (
        <button
          key={tag}
          className={selectedTags.includes(tag) ? 'selected' : ''}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
      <br></br><br></br>
      <Link to="/input"><button onClick={handleCompleteClick}>선택 완료!</button></Link>
    </div>
  );
}

export default Hashtag;