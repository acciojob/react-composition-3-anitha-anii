import React from 'react';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  }

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  render() {
    const { text, children } = this.props;
    const { isHovered } = this.state;

    return (
      <div className="tooltip-container" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {children}
        {isHovered && <div className="tooltip">{text}</div>}
      </div>
    );
  }
}

export default Tooltip;

