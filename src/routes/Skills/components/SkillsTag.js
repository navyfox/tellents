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
          {this.props.tags.map(item => (
            <div key={item.id} className='skill-tag'>{item.name}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default SkillsTag;