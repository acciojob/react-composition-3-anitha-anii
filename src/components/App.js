// import React from 'react';
// import {Tooltip,Child} from './Tooltip';
// import '../styles/App.css';

// const App = () => {
//   return (
//     <div>
//       <Tooltip text="This is a tooltip">
//        </Tooltip>

//        <Child children='This is another tooltip'>
//        </Child>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import '../styles/App.css';

const Tooltip = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <h2
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover over me
      {showTooltip && <div className="tooltiptext">{text}</div>}
    </h2>
  );
};

const Child = ({ children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <p
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover over me to see another
      {showTooltip && <div className="tooltip">{children}</div>}
    </p>
  );
};

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip" />
      <Child>This is another tooltip</Child>
    </div>
  );
};

export default App;
export { Tooltip, Child };





