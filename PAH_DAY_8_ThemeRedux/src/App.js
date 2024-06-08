import React from 'react';
import './assets/css/App.css';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import Theme from './components/Theme';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Theme />
      </div>
    </Provider>
  );
}

export default App;
