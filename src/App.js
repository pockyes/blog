import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['가을 소비 목록', '이태원 비건 맛집', '9월 회고']);
  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button>
        버튼 클릭 시 제목이 변경되게
      </button>
      <div className="list">
          <h3> { 글제목[0] } <span onClick={ ()=> { 좋아요변경(좋아요 + 1) }}>♡</span> {좋아요} </h3>
          <p>9월 22일 발행</p>
          <hr/>
      </div>
      <div className="list">
          <h3> { 글제목[1] } </h3>
          <p>9월 22일 발행</p>
          <hr/>
      </div>
      <div className="list">
          <h3> { 글제목[2] } </h3>
          <p>9월 22일 발행</p>
          <hr/>
      </div>
    </div>
  );
}

export default App;
