import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
        <h1 id='titre'>"Plan better. Build better"</h1>
        <Form/>
        <Card/>
    </div>
  );
}

export default App;
