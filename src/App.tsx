import React from 'react';
import './App.css';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Login onSubmit={() => alert('not implemented')}></Login>
    </div>
  );
}

export default App;
