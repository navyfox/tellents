import React, { Component } from 'react';
import SkillsButton from './SkillsButton'
import CheckBoxSkills from './СheckBoxSkills'

class AddSkilsStep1 extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  checkBoxArray = () => this.props.profession_categories.map( (item) => (
    <CheckBoxSkills key={item.id}
             id={item.id}
             name={item.name}
             categories="profession_categories"
             type="radio"
    />
  ));
  render () {
    return (
          <div className="step-1">
            <div className="skill-block skill-cat">
              <div className="skill-block-title">Choose  Your Skill Category</div>
              <div className="skill-block-list">
                <form>
                  {this.checkBoxArray()}
                </form>
              </div>
              <button type="button" class="btn btn-blue btn-bold step-2-toggler step-toggler">Next</button>
            </div>
          </div>
    );
  }
}
AddSkilsStep1.defaultProps = {
  isOneButton: true,
  profession_categories: [{
    id: 1,
    name: "Web, Mobile \u0026 Software Dev",
  }, {
    id: 2,
    name: "IT \u0026 Networking",
  }, {
    id: 3,
    name: "Data Science \u0026 Analytics",
  }, {
    id: 4,
    name: "Engineering \u0026 Architecture",
  }, {
    id: 5,
    name: "Design \u0026 Creative",
  }, {
    id: 6,
    name: "Writing",
  }, {
    id: 7,
    name: "Translation",
  }, {
    id: 8,
    name: "Legal",
  }, {
    id: 9,
    name: "Admin Support",
  }, {
    id: 10,
    name: "Customer Service",
  }, {
    id: 11,
    name: "Sales \u0026 Marketing",
  }, {
    id: 12,
    name: "Accounting \u0026 Consulting",
  }]
};

    {/*<div className='flexbox'>*/}
      {/*<div className="left-col">*/}
        {/*<div role="tabpanel" className="tab-pane my-tab step-1-open" id="skills">*/}
          {/*<div className="steps-nav flexbox justify-space-between">*/}
            {/*<div className="steps-nav-title">Your Shared Skills</div>*/}
            {/*<SkillsButton isOneButon={false} />*/}
          {/*</div>*/}
        {/*</div>*/}

export default AddSkilsStep1;