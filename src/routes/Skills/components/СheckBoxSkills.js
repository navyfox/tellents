import React, { Component } from 'react'

class CheckBoxSkills extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render () {
    return (
        <div className="checkbox-block">
          <input type={this.props.type} name={this.props.categories} id={this.props.id}/>
          <label htmlFor={this.props.id}>
            <span className="checkbox-circle">
              <span className="icon icon-check-mark"></span>
            </span>
            <span className="checkbox-text">{this.props.name}</span>
          </label>
        </div>
    )
  }
}

export default CheckBoxSkills;