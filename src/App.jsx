import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Contents from './Contents';

function App() {
  //states
  const [contensPressed, setContentsPressed] = React.useState(false);

  //functions
  function showContents() {
    setContentsPressed(true);
  };

  return (
    <div className="App">
      {contensPressed ? <Contents/> : <Welcome proceed={showContents} />}
    </div>
  )
}

export default App
