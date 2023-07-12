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
    <div>
      <h2 className={`tooltip ${isTooltipVisible ? "active" : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Hover over me
        {isTooltipVisible && <div className="tooltiptext">{text}</div>}
      </h2>
      <hr />

      <p className={`tooltip ${isChildrenTooltipVisible ? "active" : ""}`} onMouseEnter={handleChildrenMouseEnter} onMouseLeave={handleChildrenMouseLeave}>
        Hover over me to see another tooltip
        {isChildrenTooltipVisible && <div className="tooltiptext">{children}</div>}
      </p>
      <hr />
    </div>
  );
};

export default Tooltip;
