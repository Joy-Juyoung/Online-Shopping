import React from 'react';
import ReactDOM from 'react-dom';
// Warning: React 18에서는 createRoot 사용해야함. 아래 참고 후 수정하기
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
