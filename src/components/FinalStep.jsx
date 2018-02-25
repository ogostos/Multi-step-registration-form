import React, { Component } from 'react';

class FinalStep extends Component {
  render () {
    return (
      <div className="form-top">
        <div className="form-top-left">
          <h3>That's it!</h3>
          <p>Your have been registered.</p>
        </div>
          <div className="form-top-right">
          <i className="fa fa-user-plus"></i>
        </div>
      </div>
    )
  }
}
export default FinalStep;