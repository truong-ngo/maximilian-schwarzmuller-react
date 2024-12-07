import React, { useCallback, useState } from 'react';
import Button from "./components/UI/Button/Button"

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false)

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph(prevState => !prevState)
  }, [])

  console.log('APP RUNNING')

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
