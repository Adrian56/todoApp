import React, { PropTypes, Component } from 'react'

class Link extends Component {
  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>
    }

    return (
      <a href="#" onClick={this._onClick}>
        {this.props.children}
      </a>
    )
  }

  _onClick = (e) => {
    e.preventDefault()
    return this.props.onClick();
  }
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
