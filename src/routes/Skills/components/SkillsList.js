import React, { Component } from 'react'
// import PageLayout from '../../../layouts/PageLayout/PageLayout'
// import PropTypes from 'prop-types'

class SkillsList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <form>
        {this.props.categories.map(item => {
          if (item.selected) {
            return (
              <div key={item.id} className='checkbox-block'>
                <input type='checkbox' id='math-1'/>
                <label>
                  <span className='checkbox-circle'>
                    <span className='icon icon-check-mark'/>
                  </span>
                  <span className='checkbox-text'>{item.name}</span>
                </label>
              </div>
            )
          }
        })}
      </form>
    )
  }
}

export default SkillsList
