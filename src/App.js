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
// shift, splice 이런건 바로 setState함수에 넣으면 안됨. 넣고 그다음줄에 복사본 배열을 넣는방식

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

// * 동적인 UI 만드는 스텝 (중요)
// 1. html css로 미리 디자인 완성
// 2. ui의 현재상태를 state로 저장
// 3. state에 따라 ui 가 어떻게 보일지 작성
// { 조건식 ? 참일때 코드 : 거짓일때 코드 }

// * for 대신 map
// 비슷한 html 반복실행하고싶으면 씀
// 1. 왼쪽 array 자료만큼 내부코드 실행해줌 
// 2. return 오른쪽에 있는걸 array로 담아줌
// 3. 첫번째 파라미터 el은 배열내 요소 하나하나임, 두번째는 i 0,1,2증가

// * props
// Modal컴포넌트는 App컴포넌트 밖에있어서 글제목 변수를 못씀
// props로 받아야함 쓰는법은 <자식컴포넌트 작명={state이름}> 
// 하고 자식컴포넌트(props)로 받아서 props.작명으로 사용
// 부모 > 자식만 가능 역은 성립x
// 되도록 최상위 컴포넌트에 state 작성

// * input
// input type은 정말다양함. 알아볼것
// input에 뭔가 입력시 코드실행하고싶으면 onChange
// onScroll={} onMouseOut 등 이벤트핸들러 30개정도 됨 필요하면 검색
// input에 입력한 값 가져오는법
// onChange = {(e)} 여기서 e는 지금 발생하는 이벤트와 관련됨
// e.tartget은 이벤트 발생한 html태그
// e.target.value 이벤트 발생한 html태그에 입력한 값
// e.stopPropagation() 은 이벤트버블링 막을수있음

// * class
// 요즘은 컴포넌트 다 function으로 만드니 몰라도됨
// class란 변수, 함수 보관함

import React, { useState } from 'react';
import './App.css';

function App() {
  let post = '강남 우동 맛집'; 
  let [글제목, set글제목] = useState(['남자 코트 추천','강남우동추천','강의추천']);
  let [따봉, set따봉] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, set입력값] = useState('');

  [1,2,3].map(function(a){
    console.log(a)
  })

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {setModal(!modal)}}>모달</button>
      {
        글제목.map((el,i) => {
          return(
            <div className='list' key={i} i = {i}>
              <h4 onClick={() => {setModal(true); setTitle(i)}}>{ 글제목[i] } 
              <span onClick={() => { set따봉(따봉[i]+1) }}>👍</span> {따봉[i]}</h4>
              <p>2월 18일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i,1);
                set글제목(copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      <div>
        <input onChange={(e) => {set입력값(e.target.value); console.log(입력값)}} / >
        <button onClick={() => {
          let copy2 = [...글제목];
          copy2.unshift(입력값);
          set글제목(copy2);
        }}>발행</button> 
      </div>
      
      {
        modal ? <Modal color = 'whitesmoke' title = {title} 글제목={글제목} set글제목={set글제목}/> : null
      }
      <Modal2></Modal2>
    </div>
  );
};

function Modal(props){
  return (
    <div className ="modal" style={{background: props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

class Modal2 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name : 'kim',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕 {this.state.age}
        <button onClick={() => {
          this.setState({age : 21})
        }}>버튼</button>
      </div>
    )
  }
}

export default App;
