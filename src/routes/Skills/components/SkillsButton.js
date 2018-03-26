import React, { Component } from 'react';

class SkillsButton extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="steps-nav-btn">
        <div className="btn-group step-2-btn clearfix">
          <button type="button" className="btn btn-blue-border btn-bold step-1-toggler step-toggler">Back</button>
          <button type="button" className="btn btn-blue btn-bold step-3-toggler step-toggler">Done</button>
        </div>
        <button type="button" className="btn btn-blue btn-bold step-1-toggler step-toggler">Add</button>
      </div>
    );
  }
}

SkillsButton.defaultProps = {
  list: [
    'Lorem ipsum dolor sit amet, consectetur1',
    'Lorem ipsum dolor sit amet, consectetur2',
    'Lorem ipsum dolor sit amet, consectetur3',
  ],
}

export default SkillsButton;