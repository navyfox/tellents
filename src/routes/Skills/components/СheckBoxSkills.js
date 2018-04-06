import React, { Component } from 'react'
import { Field } from 'react-final-form'

class CheckBoxSkills extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render () {
    return (
        <div className="checkbox-block">
          <Field
            type={this.props.type}
            name={this.props.name}
            id={this.props.id}
            value={this.props.id}
            component={this.props.component}
          />
          <label htmlFor={this.props.id}>
            <span className="checkbox-circle">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">{this.props.name}</span>
          </label>
        </div>
    )
  }
}

export default CheckBoxSkills;