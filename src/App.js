import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';

class App extends Component {
  render () {
    return (
      <div className="top-content">
        <div className="inner-bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text">
                <h1><strong>Bootstrap</strong> Multi Step Registration Form</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3 form-box">
                <FormContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
