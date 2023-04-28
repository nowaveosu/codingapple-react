/* eslint-disable */
// warning 메시지 무시가능메세지

// * JSX문법
// class 넣을땐 className
// 변수꽂을땐 {변수명}
// style은 style={{키:"값"}}
// jsx 안에선 if for 못씀

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

// * component
// html 덩어리들을 깔끔하게 묶을수 있는것
// 1. 함수바깥에 function 만들고
// 2. return() 안에 html담기
// 3. <Modal> </Modal> 혹은 <Modal/> 쓰기
// 단, 다른 함수에 있던 변수는 컴포넌트에서 쓸수없음

// * 동적인 UI 만드는 스텝
// 1. html css로 미리 디자인 완성
// 2. ui의 현재상태를 state로 저장
// 3. state에 따라 ui 가 어떻게 보일지 작성
// { 조건식 ? 참일때 코드 : 거짓일때 코드 }

// * for 대신 map
// 비슷한 html 반복실행하고싶으면 씀
// 1. 왼쪽 array 자료만큼 내부코드 실행해줌 
// 2. return 오른쪽에 있는걸 array로 담아줌
// 3. 첫번째 파라미터 el은 배열내 요소 하나하나임, 두번째는 i 0,1,2증가

import { useState } from 'react';
import './App.css';

function App() {
  let post = '강남 우동 맛집'; 
  let [글제목, set글제목] = useState(['남자 코트 추천','강남우동추천','강의추천']);
  let [따봉, set따봉] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  [1,2,3].map(function(a){
    console.log(a)
  })

  function Modal(){
    return (
      <div className ="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {setModal(!modal)}}>모달</button>
      {
        글제목.map((el,i) => {
          return(
            <div className='list'>
              <h4 onClick={() => {setModal(true)}}>{ el } <span onClick={() => {
                let copy = [...따봉];
                copy[i] = copy[i]+1;
                set따봉(copy);
              }}>👍</span> {따봉[i]}</h4>
              <p>2월 18일 발행</p>
            </div>
          )
        })
      }
      {
        modal === true ? <Modal/> : null
      }
    </div>
  );
}


export default App;
