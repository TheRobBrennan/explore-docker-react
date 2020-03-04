import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Current release of React (which does not have support for concurrent mode)
// ReactDOM.render(<App />, document.getElementById('root'));

// If we have react@experimental and react-dom@experimental, we can enable concurrent mode
const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);
root.render(<App />);

// // We can use another root API to automatically unmount our app after a delay
// setTimeout(() => {
//   root.unmount()  // Presto! Our app is unmounted after three seconds 🎩
// }, 3000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
