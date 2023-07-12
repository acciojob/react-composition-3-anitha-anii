import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <span className="tooltip">Hover over me</span>
      </Tooltip>
    </div>
  );
}

export default App;


