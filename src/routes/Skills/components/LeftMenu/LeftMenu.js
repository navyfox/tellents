import React, { Component } from 'react';

class LeftMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="right-col">
        <ul className="nav nav-pills nav-stacked my-sidebar" role="tablist">
          <li role="presentation">
            <a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">
              <span className="icon icon-overview"></span>
              Overview
            </a>
          </li>
          <li role="presentation">
            <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
              <span className="icon icon-message"></span>
              Messages
            </a>
          </li>
          <li role="presentation">
            <a href="#my-jobs" aria-controls="my-jobs" role="tab" data-toggle="tab">
              <span className="icon icon-jobs"></span>
              My Jobs
            </a>
          </li>
          <li role="presentation">
            <a href="#my-promo" aria-controls="my-promo" role="tab" data-toggle="tab">
              <span className="icon icon-promo"></span>
              My Promo
            </a>
          </li>
          <li role="presentation">
            <a href="#skills" aria-controls="skills" role="tab" data-toggle="tab">
              <span className="icon icon-skills"></span>
              My Skills
            </a>
          </li>
          <li role="presentation" className="active">
            <a href="#saved" aria-controls="saved" role="tab" data-toggle="tab">
              <span className="icon icon-saved"></span>
              Saved
            </a>
          </li>
          <li role="presentation">
            <a href="#media" aria-controls="media" role="tab" data-toggle="tab">
              <span className="icon icon-media"></span>
              My Media
            </a>
          </li>
          <li role="presentation">
            <a href="#accounts" aria-controls="accounts" role="tab" data-toggle="tab">
              <span className="icon icon-accounts"></span>
              Accounts
            </a>
          </li>
          <li role="presentation">
            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
              <span className="icon icon-profile"></span>
              Profile
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

LeftMenu.defaultProps = {
  list: [
    'Overview',
    'Messages',
    'My Jobs',
    'My Promo',
    'My Skills',
    'Saved',
    'My Media',
    'Accounts',
    'Profile',
  ],
}

export default LeftMenu;