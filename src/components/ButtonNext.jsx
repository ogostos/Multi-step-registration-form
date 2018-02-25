import React, { Component } from 'react';

class ButtonNext extends Component {
  next (event) {
    event.preventDefault();
    this.props.onClick(1);
  }

  render () {
    return (
      <button type="button" className="btn btn-next" onClick={this.next.bind(this)} disabled={!this.props.allRequired}>Next</button>
    )
  }
}
export default ButtonNext;