import React from 'react';
import './App.css';
import { GLBViewer } from './comp/GLBviewer';
import Confetti from 'react-confetti';

function App() {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={200}
        recycle={true}
      />
      <header className="App-header">
        <div className="birthday-message">
          HAPPY BIRTHDAY PISSBOWL
        </div>
        <GLBViewer url={`${process.env.PUBLIC_URL}/model.glb`} />
      </header>
    </div>
  );
}

export default App;
