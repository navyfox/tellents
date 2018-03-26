import React, { Component } from 'react';

class SkillsTag extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='skill-sub-block'>
        <div className='skill-block-title'>Skills</div>
        <div className='skill-tags-block clearfix'>
          {this.props.list.map(item => (
            <div key={item} className='skill-tag'>{item}</div>
          ))}
        </div>
      </div>
    );
  }
}

SkillsTag.defaultProps = {
  list: [
    'Math',
    'Trigonometry',
    'Calculus',
  ],
}

export default SkillsTag;