import React from 'react';
import './assets/css/App.css';
import DisplayData from './components/DisplayData';

function App() {

  const dynamicData = new Date().toLocaleString();

  return (
    <div className="App">
      <h1>Props Demo</h1>
      <DisplayData staticData="Hello, I am static data!" dynamicData={dynamicData} />
    </div>
  );
}

export default App;
