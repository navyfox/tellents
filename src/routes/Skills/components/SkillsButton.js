import React, { Component } from 'react';

class SkillsButton extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return this.props.isOneButton ? (
      <div className="steps-nav-btn">
        <button type="button" onClick={this.props.func} className="btn btn-blue btn-bold step-1-toggler step-toggler">Add</button>
      </div>
    ) : (
      <div className="steps-nav-btn">
        <div className="btn-group clearfix">
          <button type="button" className="btn btn-blue-border btn-bold step-1-toggler step-toggler">Back</button>
          <button type="button" className="btn btn-blue btn-bold step-3-toggler step-toggler disabled">Done</button>
        </div>
      </div>
    )
  }
}

SkillsButton.defaultProps = {
  isOneButton: true,
  list: [
    'Lorem ipsum dolor sit amet, consectetur1',
    'Lorem ipsum dolor sit amet, consectetur2',
    'Lorem ipsum dolor sit amet, consectetur3',
  ],
};

export default SkillsButton;