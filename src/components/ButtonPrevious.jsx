import React, { Component } from 'react';

class ButtonPrevious extends Component {
  prev (event) {
    event.preventDefault();
    this.props.onClick(-1);
  }

  render () {
    return (
      <button type="button" className="btn btn-next" onClick={this.prev.bind(this)}>Previous</button>
    )
  }
}
export default ButtonPrevious;