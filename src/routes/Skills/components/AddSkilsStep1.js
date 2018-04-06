import React, { Component } from 'react'
import SkillsButton from './SkillsButton'
import CheckBoxSkills from './СheckBoxSkills'
import { Field, Form } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import arrayMutators from 'final-form-arrays'

const renderDays = ({ fields }) => {
  console.log('fields', fields)
  return (
    <div>
      {fields.map((name, index) => {
        console.log('name', name)
        console.log('fields', fields)
        return (
          <div key={name}>
            <div>
              <label>First Name</label>
              <Field name={`${name}.firstName`} component="input"/>
            </div>
            <div>
              <label>Last Name</label>
              <Field name={`${name}.lastName`} component="input"/>
            </div>
            <button type="button" onClick={() => fields.remove(index)}>
              Remove
            </button>
          </div>
        )
      })}
    </div>
  )
}

class AddSkilsStep1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOneButton: true,
      step: 0,
    }
  }

  checkBoxArray = (categories) => Object.values(categories).map((value) => (
    <CheckBoxSkills key={value.id}
                    id={value.id}
                    name={value.name}
                    categories="profession_categories"
                    type="radio"
    />
  ))

  checArray = () => this.profession_categories.map((value) => (
    <div>{value}</div>
  ))

  onSubmit = (values) => {
    // await
    // sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  render () {
    // let categories = Object.assign({ ...this.props.categories })
    let categories = this.props.profession_categories
    // let array = this.checkBoxArray(categories);
    return (
      <div className="step-1">
        <div className="skill-block skill-cat">
          <Form
            onSubmit={this.onSubmit}
            initialValues={this.props.initialValues}
            mutators={{
              ...arrayMutators
            }}
            render={({ handleSubmit, submitting, pristine }) => (
              <div>
                <div className="skill-block-title">Choose Your Skill Category</div>
                <div className="skill-block-list">
                  <form onSubmit={handleSubmit}>
                    <FieldArray name="profession_categories">
                      {({ fields }) => (
                        <div>
                          {fields.map((name, index) => {
                            return (
                              <Field key={index} name={`${name}`} component={(props) => {
                                console.log('props', props)
                                return (
                                  <div className="checkbox-block">
                                    <input
                                      type='radio'
                                      name='categories'
                                      value={props.input.value.id}
                                      id={props.input.value.id}
                                    />
                                    <label htmlFor={props.input.value.id}>
                                      <span className="checkbox-circle">
                                        <span className="icon icon-check-mark" />
                                      </span>
                                      <span className="checkbox-text">{props.input.value.name}</span>
                                    </label>
                                  </div>
                                )
                              }}/>
                            )
                          })}
                        </div>
                      )}
                    </FieldArray>
                  </form>
                </div>
                <button type="submit"
                        disabled={submitting || pristine}
                        className="btn btn-blue btn-bold step-2-toggler step-toggler">Next
                </button>
              </div>
            )}
          />
        </div>
      </div>
    )
  }
}

AddSkilsStep1.defaultProps = {
  initialValues: {
    profession_categories: [{
      id: 1, name: 'Web, Mobile \u0026 Software Dev'
    }, {
      id: 2, name: 'IT \u0026 Networking'
    }, {
      id: 3, name: 'Data Science \u0026 Analytics'
    }, {
      id: 4, name: 'Engineering \u0026 Architecture'
    }, {
      id: 5, name: 'Design \u0026 Creative'
    }, {
      id: 6, name: 'Writing'
    }, {
      id: 7, name: 'Translation'
    }, {
      id: 8, name: 'Legal'
    }, {
      id: 9, name: 'Admin Support'
    }, {
      id: 10, name: 'Customer Service'
    }, {
      id: 11, name: 'Sales \u0026 Marketing'
    }, {
      id: 12, name: 'Accounting \u0026 Consulting'
    }],
  }
}

export default AddSkilsStep1