import React from 'react';
import Tooltip from './Tooltip';
import '../styles/App.css';
import Tooltiptext from './TooltipText';

function App() {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <span className="tooltip">Hover over me</span>
      </Tooltip>
    <br />
      <Tooltiptext text="This is another tooltip">
        <span className="tooltip">Hover over me to another tooltip</span>
       </Tooltiptext>
    </div>
  );
}

export default App;






