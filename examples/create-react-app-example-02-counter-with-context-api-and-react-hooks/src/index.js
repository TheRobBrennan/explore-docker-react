import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './store/store';
import { ChildComponent } from './components/child-component/childComponent';
import { ChildComponentWithCustomUseCounterHook } from './components/child-component-with-custom-hook/childComponentWithCustomHook';

function App() {
  return (
    <StoreProvider>
      <strong>Example using Context API and React Hooks:</strong>
      <ChildComponent/>
      <p />
      <strong>Example using Context API and React Hooks with a custom useCounter hook:</strong>
      <ChildComponentWithCustomUseCounterHook />
    </StoreProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
