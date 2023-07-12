import React, { useState } from "react";

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
    <div className="tooltiptext">
      <h2 className="tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{isTooltipVisible && <div>{text}</div>}
        Hover over me
      </h2>
      <hr />

      <p className="tooltip"
        onMouseEnter={handleChildrenMouseEnter}
        onMouseLeave={handleChildrenMouseLeave}
      >Hover over me to see another tooltip
       {isChildrenTooltipVisible && (<div>{children}</div>)}
      </p>
      <hr />
              </div>
          
            );
};

export default Tooltip;
