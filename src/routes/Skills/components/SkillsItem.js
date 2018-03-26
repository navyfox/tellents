import React, { Component } from 'react'
import SkillsList from './SkillsList'
import SkillsTag from './SkillsTag'

class SkillsItem extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='skill-subcat skill-subcat--item'>
        <div className='flexbox justify-space-between'>
          <div className='skill-block'>
            <div className='skill-block-title'>{this.props.title}</div>
            <div className='skill-block-list'>
              <SkillsList />
            </div>
          </div>
          <SkillsTag />
        </div>
        <div className="skill-block-footer">
          <a href="#">View More</a>
          <a href="#">Edit</a>
        </div>
      </div>
    );
  }
}

SkillsItem.defaultProps = {
  title: 'Math & Science',
};

export default SkillsItem;