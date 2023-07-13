
import React, { useState } from 'react';

const TooltipComponent = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isChildrenTooltipVisible, setIsChildrenTooltipVisible] = useState(false);
  const [text, setText] = useState('');
  const [children, setChildren] = useState('');

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
    setText('This is a tooltip');
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
    setText('');
  };

  const handleChildrenMouseEnter = () => {
    setIsChildrenTooltipVisible(true);
    setChildren('This is another tooltip');
  };

  const handleChildrenMouseLeave = () => {
    setIsChildrenTooltipVisible(false);
    setChildren('');
  };

  return (
    <div>
      <h2 className='tooltip' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Hover over me
        <div className='tooltip'>{text}</div>
      </h2>
      <hr />
      <p className='tooltip' onMouseEnter={handleChildrenMouseEnter} onMouseLeave={handleChildrenMouseLeave}>
        Hover over me to see another tooltip
        <div className='tooltiptext'>{children}</div>
      </p>
      <hr />
      {/* {isTooltipVisible && <div className='tooltip-text'>{text}</div>}
      {isChildrenTooltipVisible && <div className='tooltip-text'>{children}</div>} */}
    </div>
  );
};

export default TooltipComponent;
