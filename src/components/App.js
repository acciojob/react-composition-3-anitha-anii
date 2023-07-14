import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <h2 className="tooltip">Hover over me</h2>
        
      </Tooltip>
    </div>
  );
};

export default App;



