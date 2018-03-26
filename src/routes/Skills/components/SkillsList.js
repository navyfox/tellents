import React, { Component } from 'react';
// import PageLayout from '../../../layouts/PageLayout/PageLayout'
// import PropTypes from 'prop-types'

class SkillsList extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <form>
        {this.props.list.map(item => (
          <div key={item} className='checkbox-block'>
            <input type='checkbox' id='math-1' checked />
            <label>
          <span className='checkbox-circle'>
            <span className='icon icon-check-mark' />
          </span>
              <span className='checkbox-text'>{item}</span>
            </label>
          </div>
        ))}
      </form>
    );
  }
}

SkillsList.defaultProps = {
  list: [
    'Lorem ipsum dolor sit amet, consectetur1',
    'Lorem ipsum dolor sit amet, consectetur2',
    'Lorem ipsum dolor sit amet, consectetur3',
  ],
}

export default SkillsList;
