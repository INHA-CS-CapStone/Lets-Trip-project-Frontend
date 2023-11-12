import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import './hashtag.css';

function Hashtag() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTypes = location.state.selectedTypes;
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(item => item !== tag));
    } else if (selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tag]);
    }
  }
  const handleCompleteClick = () => {
    if (selectedTags.length < 1) {
      alert('선호하는 여행지 키워드를 선택해주세요.');
    } else {
      axios.post('http://localhost:8000/selection/', {
        tourismTypes: selectedTypes,
        tagNames: selectedTags,
      });
      navigate('/search');
    }
  }

  const tagNames = [
    '#힐링', '#포토존', '#재밌는', '#아름다운', '#조용한', '#전통적', '#경치', '#특별한', 
    '#웅장한', '#놀거리', '#활기찬', '#예술적', '#산책', '#신기한', '#도심의'
  ];

  return (
    <div className="selecting">
      <h1>선호하는 여행지 키워드를 선택해 주세요!</h1>
      <p>최대 5개까지 선택 가능합니다.</p>
      <div className="tag-container">
        {tagNames.map(tag => (
          <button
            key={tag}
            className={selectedTags.includes(tag) ? 'selected' : ''}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleCompleteClick}>다음</button>
      </div>
    </div>
  );
}

export default Hashtag;
