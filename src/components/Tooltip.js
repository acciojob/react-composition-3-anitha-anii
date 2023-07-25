import React from 'react';


class Tooltip extends React.Component {
  render() {
    const { text, children } = this.props;
    return (
      <div className="tooltip-container">
        <h2 className="tooltip">
          {children}
          <span className="tooltiptext">{text}</span>
        </h2>
      </div>
    );
  }
}

export default Tooltip;

