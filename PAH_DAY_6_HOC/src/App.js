import React from 'react';
import './assets/css/App.css';
import WithLoading from './components/WithLoading';
import MyComponent from './components/MyComponent';

const WrappedComponentWithLoading = WithLoading(MyComponent);

function App() {

  return (
    <div className="App">
      <h1>Higher-Order Component Example</h1>
      <WrappedComponentWithLoading />
    </div>
  );
}

export default App;
