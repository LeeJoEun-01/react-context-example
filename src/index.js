import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PersonContext from './contexts/PersonContext';

const persons = [
  { id: 0, name: 'Mark', age: 39},
  { id: 1, name: "Hanna", age: 28},
]

ReactDOM.render(
  <React.StrictMode>
    {/* // 데이터 Set하기 -2) <App>이 <PersonContext.Provider> 태그 안에 있음으로 다 컨드롤할 수 있다. */}
    <PersonContext.Provider value={persons}>
    {/* // 데이터 Set하기 -3) value={persons}로 함으로써 프로바이드 안에 있는 모든 하위 컴포넌트에서 가져다 쓸 수 있다. */}
      <App />
    </PersonContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
