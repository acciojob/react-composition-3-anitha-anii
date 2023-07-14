import React from 'react';
import '../styles/App.css'; 

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false
    };
  }

  handleMouseEnter = () => {
    this.setState({ showTooltip: true });
  }

  handleMouseLeave = () => {
    this.setState({ showTooltip: false });
  }

  render() {
    const { text, children } = this.props;
    const { showTooltip } = this.state;

    return (
      <div className="tooltip-container">
        <div
          className="tooltip"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {children}
          {showTooltip && <span className="tooltiptext">{text}</span>}
        </div>
      </div>
    );
  }
}

export default Tooltip;
