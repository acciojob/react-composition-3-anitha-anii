import React from 'react';
import Tooltip from './Tooltip';
import '../styles/App.css';


function App() {
  return (
    <div>
      <Tooltip text="This is a tooltip" children='This is another tooltip' />
    </div>
  );
}

export default App;



