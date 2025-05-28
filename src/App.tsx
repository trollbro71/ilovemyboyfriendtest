import React from 'react';
import './App.css';
import { GLBViewer } from './comp/GLBviewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GLBViewer url="/model.glb" />
      </header>
    </div>
  );
}

export default App;
