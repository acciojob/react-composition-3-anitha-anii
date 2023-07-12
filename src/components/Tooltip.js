import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [isChildrenTooltipVisible, setChildrenTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleChildrenMouseEnter = () => {
    setChildrenTooltipVisible(true);
  };

  const handleChildrenMouseLeave = () => {
    setChildrenTooltipVisible(false);
  };

  return (
    <div>
      <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Hover over me
      </h2>
      <hr />
      <h6
        onMouseEnter={handleChildrenMouseEnter}
        onMouseLeave={handleChildrenMouseLeave}
      >
        Hover over me to see another tooltip
      </h6>
      <hr />
      {isTooltipVisible && <div className='tooltiptext'>{text}</div>}
      {isChildrenTooltipVisible && (
        <div className='tooltiptext'>{children}</div>
      )}
    </div>
  );
};

export default Tooltip;
