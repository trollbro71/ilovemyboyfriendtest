import React from 'react';
import './App.css';
import { GLBViewer } from './comp/GLBviewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GLBViewer url={`${process.env.PUBLIC_URL}/model.glb`} />
      </header>
    </div>
  );
}

export default App;
