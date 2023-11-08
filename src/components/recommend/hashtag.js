import React, { useState } from 'react';
import './hashtag.css';

function Hashtag() {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(item => item !== tag));
    } else if (selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  const tagNames = [
    '#힐링', '#포토존', '#재밌는', '#붐비는', '#조용한', '#볼거리', 
    '#뷰', '#특별한', '#웅장한', '#놀거리', '#유익한', '#야경'
  ];

  return (
    <div className="App">
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
      <div>
        <h2>선택된 태그</h2>
        <ul>
          {selectedTags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Hashtag;