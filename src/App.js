/* eslint-disable */
// warning 메시지 무시가능메세지

// * JSX문법
// class 넣을땐 className
// 변수꽂을땐 {변수명}
// style은 style={{키:"값"}}

// * state
// state는 변수인데 바뀌면 html이 변경됨
// 자주 변경될것 같은 html부분은 state로 만들기
// state 변경할땐 state변수 등호로 재할당ㄴㄴ
// set변경함수(새로운state) 를 쓸것

// * onClick
// 태그안에 onClick = {} 안에는 함수만 들어가야함
// 함수명 넣던가 () => {}

// * array 변경법
// state가 array/object면 [...array명] 이런식으로 복사본 만들어서 변경할것
// 숙제) 버튼 글제목 가나다순 정렬 기능 만들기
import { useState } from 'react';
import './App.css';

function App() {
  let post = '강남 우동 맛집'; 
  let [글제목, set글제목] = useState(['남자 코트 추천','강남우동추천','강의추천']);
  let [따봉, set따봉] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여1자 코트 추천';
        set글제목(글제목);
      }}>글수정</button>

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={() => {set따봉(따봉+1)}}>👍</span> {따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

    </div>
  );
}

export default App;
