// import React from 'react';
// import ReactDOM from 'react-dom';
// // Warning: React 18에서는 createRoot 사용해야함. 아래 참고 후 수정하기
// // https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

// const store = store()

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
