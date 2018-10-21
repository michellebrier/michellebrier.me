import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Col, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import './App.css';

let cx = classNames.bind(styles);

var styles = {
  active: 'active',
  show: 'show',
  home: 'home',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationOpen: false,
      experienceOpen: false,
      skillsOpen: false,
      interestsOpen: false,
      homeOpen: true,
    };
  }

  goHome() {
    this.setState({ educationOpen: false });
    this.setState({ experienceOpen: false });
    this.setState({ skillsOpen: false });
    this.setState({ interestsOpen: false });
    this.setState({ homeOpen: true });
  }

  openEducation() {
    this.setState({ educationOpen: true });
    this.setState({ experienceOpen: false });
    this.setState({ skillsOpen: false });
    this.setState({ interestsOpen: false });
    this.setState({ homeOpen: false });
  }

  openExperience() {
    this.setState({ experienceOpen: true });
    this.setState({ educationOpen: false });
    this.setState({ skillsOpen: false });
    this.setState({ interestsOpen: false });
    this.setState({ homeOpen: false });
  }

  openSkills() {
    this.setState({ skillsOpen: true });
    this.setState({ experienceOpen: false });
    this.setState({ educationOpen: false });
    this.setState({ interestsOpen: false });
    this.setState({ homeOpen: false });
  }

  openInterests() {
    this.setState({ interestsOpen: true });
    this.setState({ experienceOpen: false });
    this.setState({ skillsOpen: false });
    this.setState({ educationOpen: false });
    this.setState({ homeOpen: false });
  }

  renderNavigation() {
    return (
      <div>
        <p className={cx('nav-link', { active: this.state.educationOpen })} onClick={() => this.openEducation()}>Education</p>
        <p className={cx('nav-link', { active: this.state.experienceOpen })} onClick={() => this.openExperience()}>Experience</p>
        <p className={cx('nav-link', { active: this.state.skillsOpen })} onClick={() => this.openSkills()}>Skills</p>
        <p className={cx('nav-link', { active: this.state.interestsOpen })} onClick={() => this.openInterests()}>Interests</p>
      </div>
    );
  }

  renderEducation() {
    return (
      <div className="subpart-body">
        <Row>
          <Col xs={8} md={8}>
            <a 
              className="subpart-title"
              href="https://www.berkeley.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of California, Berkeley
            </a>
          </Col>
          <Col xs={4} md={4}>
            <p className="subpart-time">Aug. 2016 - May 2020</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <p className="subpart-text"><b>GPA:</b> 3.7</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className="subpart-text">
            <p><b>Relevant coursework: </b></p>
            <Row>
              <Col xs={6} md={6}>
                <li>Data Structures & Algorithms</li>
                <li>Advanced & Efficient Algorithms</li>
                <li>Computer Architecture</li>
              </Col>
              <Col xs={6} md={6}>
                <li>Discrete Math & Probability Theory</li>
                <li>Applied Data Science with Venture Applications</li>
                <li>Internet Architecture and Protocols</li>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }

  renderExperience() {
    return (
      <div className="subpart-body">
        <Row>
          <Col xs={8} md={8}>
            <a 
              className="subpart-title"
              href="https://www.gethearth.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shogun Enterprises (DBA Hearth)
            </a>
          </Col>
          <Col xs={4} md={4}>
            <p className="subpart-time">May 2018 - Aug. 2018</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <p className="subpart-text"><em>Software Engineering Intern</em></p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className="subpart-text">
            <li>Full-stack web development with Ruby on Rails and React.js; Android/iOS development with React Native</li>
            <li>Ejected and maintained detached React Native app; managed app bundling as company shifted to mobile-first</li>
            <li>Built essential mobile features including joint loan application/onboarding flows, push notifications, mobile chat</li>
            <li>Integrated complete front-end redesigns of key pages in mobile app and of member dashboard in web app</li>
            <li>Built internal tools including CRON-based job scheduler via Jenkins, custom Rails generator to simultaneously create migration and seeds files, lender report parsers, and various CRUD interfaces</li>
            <li>Created internal coupon code manager with edit/create/deactivate functionality using Stripe API</li>
          </Col>
        </Row>
        <div className="smidge" />
        <Row>
          <Col xs={8} md={8}>
            <a 
              className="subpart-title"
              href="https://xeniagifts.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xenia Gifts
            </a>
          </Col>
          <Col xs={4} md={4}>
            <p className="subpart-time">Sept. 2017 - Jan. 2018</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <p className="subpart-text"><em>Software Engineering Intern</em></p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className="subpart-text">
            <li>Full-stack web development in Python, JSON, JavaScript, HTML5, and Jinja2 (Django) on Google App Engine</li>
            <li>Designed and implemented search autocomplete feature using trie and fuzzy (partial) string matching algorithms</li>
            <li>Created customer-facing feature to efficiently sort gift card listings by attribute such as value, price, and discount</li>
            <li>Created and integrated new front-end features such as product display sliders and redesigned product list page</li>
          </Col>
        </Row>
      </div>
    );
  }

  renderSkills() {
    return (
      <div className="subpart-body">
        <Row>
          <Col xs={12} md={12} className="subpart-text">
            <p><b>General: </b></p>
              <li>Java</li>
              <li>Python</li>
              <li>C</li>
              <li>Pandas</li>
              <li>NumPy</li>
            <div className="smidge" />
            <p><b>Web Development: </b></p>
              <li>Ruby on Rails</li>
              <li>React.js</li>
              <li>Jinja2</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>HTTP</li>
            <div className="smidge" />
            <p><b>Mobile Development: </b></p>
              <li>React Native</li>
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    const {
      educationOpen,
      experienceOpen,
      skillsOpen,
      interestsOpen,
      homeOpen,
    } = this.state;

    return (
      <div className="container">
        <Helmet>
          <title>Michelle Brier</title>
          <meta charset="utf-8" />
          <meta id="og:author" property="og:author" content="Michelle Brier" />
          <meta name="author" content="Michelle Brier" />
          <meta name="description" content="Michelle Brier - Online Portfolio" />
        </Helmet>
        <Grid>
          <div className={cx('nav-container', { home: homeOpen })}>
            <Row>
              <p className="name" onClick={() => this.goHome()}>Michelle Brier</p>
            </Row>
            <Row>
              <div className="nav-links-container">
                {this.renderNavigation()}
              </div>
            </Row>
          </div>
          <div className={cx('subpart-container', { show: educationOpen })}>
            <h3 className="subpart-header">Education</h3>
            {this.renderEducation()}
          </div>
          <div className={cx('subpart-container', { show: experienceOpen })}>
            <h3 className="subpart-header">Experience</h3>
            {this.renderExperience()}
          </div>
          <div className={cx('subpart-container', { show: skillsOpen })}>
            <h3 className="subpart-header">Skills</h3>
            {this.renderSkills()}
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
