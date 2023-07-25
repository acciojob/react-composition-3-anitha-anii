import React from "react";

class Tooltiptext extends React.Component {
    render() {
      const { text, children } = this.props;
      return (
        <div className="tooltip-container">
          <p className="tooltip">
            {children}
            <span className="tooltiptext">{text}</span>
          </p>
        </div>
      );
    }
  }
  
  export default Tooltiptext;