import React, { Component } from 'react';
import SkillsItem from './SkillsItem'
import SkillsButton from './SkillsButton'
import LeftMenu from './LeftMenu/LeftMenu'
import AddSkilsStep1 from './AddSkilsStep1'

class Skills extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOneButton: true,
      step: 0,
    };
  }

  handleAdd = () => {
    this.setState({
      isOneButton: !this.state.isOneButton,
      step: 1,
    })
    this.props.router.push('./');
  };
  
  render () {
    let content;
    if (this.state.step === 0) {
      content = <SkillsItem />;
    }
    if (this.state.step === 1) {
      content = <AddSkilsStep1 />;
    }
    return (
      <div className='flexbox'>
        <LeftMenu />
        <div className="left-col">
          <div role="tabpanel" className="tab-pane my-tab step-1-open" id="skills">
            <div className="steps-nav flexbox justify-space-between">
              <div className="steps-nav-title">Your Shared Skills</div>
              <SkillsButton isOneButton={this.state.isOneButton} func={this.handleAdd} />
            </div>
          </div>
          {content}
        </div>
      </div>
    );
  }
}

export default Skills;