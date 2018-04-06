import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import { Api } from '../../api'

class PageLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }
  
  handleLogOut = () => {
    Api.logout();
    console.log('logout');
    // this.props.router.push('/')
  }

  render () {
    return (
      <div>
        <nav className="main-top-nav flexbox justify-space-between">
          <div className="logo">
            <a className="logo-link" href="index.html"><img src="images/logo.png" height="39" width="auto"/></a>
          </div>
          <div type="button" className="humburger-icon">
            <button type="button" className="btn btn-bg-transparent"><span className="icon icon-menu"></span></button>
          </div>
          <section className="nav-mobile flexbox justify-space-between">
            <section className="nav-tablet flexbox justify-space-center">
              <div className="search-form">
                <form className="my-search-form" role="search">
                  <input type="text" className="form-control" placeholder="Search"/>
                  <div className="search-filter radio-block">
                    <div className="radio">
                      <input type="radio" name="profile-page-filter" id="jobs-filter" value="jobs-filter"/>
                      <label htmlFor="jobs-filter">
                        <span className="radio-text">Jobs</span>
                      </label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="profile-page-filter" id="talents-filter" value="talents-filter"/>
                      <label htmlFor="talents-filter">
                        <span className="radio-text">Talents</span>
                      </label>
                    </div>
                  </div>
                  <a href="" type="submit" className="btn-search"><i className="icon icon-loupe"></i></a>
                </form>
              </div>
              <div className="nav-list">
                <ul className="flexbox justify-space-between">
                  <li>
                    <Link to='/counter' activeClassName='active'>Counter
                      <div className="caret"></div>
                    </Link>
                  </li>
                  <li className="active">
                    <IndexLink to='/' activeClassName='active'>Home
                      <div className="caret"></div>
                    </IndexLink>
                  </li>
                  <li>
                    <Link to='/login' activeClassName='active'>Login
                      <div className="caret"></div>
                    </Link>
                  </li>
                  <li>
                    <Link to='/skills' activeClassName='active'>Skills <div className="caret"></div></Link>
                  </li>
                </ul>
              </div>
            </section>
            <div className="user-box">
              <div className="user-photo">
                <i className="notif"></i>
              </div>
              <div className="user-box-nav dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">Philip Seamor<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a className='log_out' onClick={this.handleLogOut}>LOG OUT</a></li>
                  <li><a href="#">Another action</a></li>
                </ul>
              </div>
            </div>
          </section>
        </nav>
        <div className='page-layout__viewport'>
          <div className='content'>
            <div className='container-fluid'>
              <div className='panel panel-default my-main-panel'>
                <div className='panel-body'>
                  <div className='tab-content my-central-info'>
                    {this.props.children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
