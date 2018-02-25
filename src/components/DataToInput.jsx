import React, { Component } from 'react';
// helper component, to generate input html based on model
class DataToInput extends Component {
  render () {
    const i = this.props.inputObject;
    let input = '';

    switch(i.type) {
      case 'select':
        input = (
          <select id={i.name} name={i.name} defaultValue={i.value}>
            <option value="" disabled hidden>Choose label here</option>
            {i.options.map(opt => <option key={opt.name} value={opt.value}>{opt.name}</option>)}
          </select>
        )
        break;
      case 'radio':
        input = (
          i.options.map(opt => {
            return (
              <div key={opt.value} className="radio-div">
                <label htmlFor={opt.value}>{opt.name}</label>
                <input type="radio" name={i.name} id={opt.value} value={opt.value} defaultChecked={i.value === opt.value}/>
              </div>
            )
          })
        )
        break;
      case 'number':
        input = (
          <div className="form-group" data-req={i.mandatory}>
            <label className="sr-only" htmlFor={i.name}>{i.labelName}</label>
            <input className="form-control" type="number" id={i.name} name={i.name} defaultValue={i.value} placeholder={i.labelName}/>
          </div>
        )
        break;
      case 'text':
        input = (
          <div className="form-group" data-req={i.mandatory}>
            <label className="sr-only" htmlFor={i.name}>{i.labelName}</label>
            <input className="form-control" type="text" id={i.name} name={i.name} defaultValue={i.value} placeholder={i.labelName}/>
          </div>
        )
        break;
      default:
        input = '';
    }
    return (
      <React.Fragment>
        {input}
      </React.Fragment>
    )
  }
}

export default DataToInput;