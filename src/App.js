import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Col, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import ReactGA from 'react-ga';
import './App.css';
import github from './github.png';
import linkedin from './linkedin.jpeg';

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
      linksOpen: false,
      homeOpen: true,
    };
  }

  initializeReactGA() {
    ReactGA.initialize('UA-131401093-1');
    ReactGA.pageview('/homepage');
  }

  componentDidMount() {
    this.initializeReactGA();
  }

  goHome() {
    this.setState({ educationOpen: false });
    this.setState({ experienceOpen: false });
    this.setState({ skillsOpen: false });
    this.setState({ interestsOpen: false });
    this.setState({ linksOpen: false });
    this.setState({ homeOpen: true });
  }

  openEducation() {
    this.setState({ educationOpen: true });
    this.setState({ experienceOpen: false });
    this.setState({ skillsOpen: false });
    this.setState({ interestsOpen: false });
    this.setState({ linksOpen: false });
    this.setState({ homeOpen: false });
  }

  openExperience() {
    this.setState({ experienceOpen: true });
    this.setState({ educationOpen: false });
    this.setState({ skillsOpen: false });
    this.setState({ interestsOpen: false });
    this.setState({ linksOpen: false });
    this.setState({ homeOpen: false });
  }

  openSkills() {
    this.setState({ skillsOpen: true });
    this.setState({ experienceOpen: false });
    this.setState({ educationOpen: false });
    this.setState({ interestsOpen: false });
    this.setState({ linksOpen: false });
    this.setState({ homeOpen: false });
  }

  openInterests() {
    this.setState({ interestsOpen: true });
    this.setState({ experienceOpen: false });
    this.setState({ skillsOpen: false });
    this.setState({ educationOpen: false });
    this.setState({ linksOpen: false });
    this.setState({ homeOpen: false });
  }

  openLinks() {
    this.setState({ interestsOpen: false });
    this.setState({ linksOpen: true });
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
        <p className={cx('nav-link', { active: this.state.linksOpen })} onClick={() => this.openLinks()}>Links</p>
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
            <p className="subpart-text"><em>B.A. Computer Science, B.A. Economics</em></p>
            <p className="subpart-text"><b>GPA:</b> 3.7</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className="subpart-text">
            <p><b>Relevant coursework: </b></p>
            <Row>
              <Col xs={6} md={6}>
                <li>CS 61B: Data Structures & Algorithms</li>
                <li>CS 170: Advanced & Efficient Algorithms</li>
                <li>CS 61C: Computer Architecture</li>
                <li>CS 161: Computer Security</li>
                <li>CS 186: Database Systems</li>
              </Col>
              <Col xs={6} md={6}>
                <li>CS 70: Discrete Math & Probability Theory</li>
                <li>IND ENG 135: Applied Data Science with Venture Applications</li>
                <li>CS 168: Internet Architecture and Protocols</li>
                <li>CS184: Computer Graphics and Imaging</li>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12} md={12} className="subpart-text">
            <p><b>Activities: </b></p>
            <Row>
              <Col xs={6} md={6}>
                <li>
                <a
                  className="subpart-link"
                  href="https://csmberkeley.github.io/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Computer Science Mentors:
                </a>
                {' '}CS 61A Mentor
                </li>
                <li>
                <a
                  className="subpart-link"
                  href="http://gamescrafters.berkeley.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                GamesCrafters
                </a>
                </li>
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
        <div className="smidge" />
        <Row>
          <Col xs={8} md={8}>
            <a 
              className="subpart-title"
              href="https://fossa.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FOSSA
            </a>
          </Col>
          <Col xs={4} md={4}>
            <p className="subpart-time">May 2017 - Jul. 2017</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <p className="subpart-text"><em>Developer Outreach Intern</em></p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className="subpart-text">
            <li>Researched open source projects compatible with FOSSA’s technology and without license/compliance scans</li>
            <li>Helped integrate FOSSA’s technology into OSS code through GitHub PRs and communication with developers</li>
            <li>Outreach to OSS developers to integrate FOSSA’s compliance check was main driver of user base expansion</li>
          </Col>
        </Row>
        <div className="smidge" />
        <Row>
          <Col xs={8} md={8}>
            <a 
              className="subpart-title"
              href="https://valleyconsultinggroup.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Valley Consulting Group
            </a>
          </Col>
          <Col xs={4} md={4}>
            <p className="subpart-time">Sept. 2017 - Dec. 2018</p>
          </Col>
        </Row>
        <div className="half-smidge" />
        <Row>
          <Col xs={12} md={12} className="subpart-text">
            <p className="subpart-subtitle">Google</p>
            <p className="subpart-text"><em>Senior Stratey Consultant</em></p>
            <li>Worked with senior UX researchers to isolate and analyze important UI/UX features within navigation apps</li>
            <li>Conducted survey and focus groups and analyzed results to isolate impact of key features used in Google Maps</li>
            <li>Researched GIS software provider offerings and analyzed modern digital integration of cartographic principles</li>
          </Col>
        </Row>
        <div className="half-smidge" />
        <Row>
          <Col xs={12} md={12} className="subpart-text">
            <p className="subpart-subtitle">Genentech</p>
            <p className="subpart-text"><em>Stratey Consultant</em></p>
            <li>Worked with senior managers to design a case competition to attract MBA students to Genentech’s MA&S dept.</li>
            <li>Designed and wrote full MBA case competition – implemented and launched by Genentech within 6 months</li>
          </Col>
        </Row>
        <div className="half-smidge" />
        <Row>
          <Col xs={12} md={12} className="subpart-text">
            <p className="subpart-subtitle">Dropbox</p>
            <p className="subpart-text"><em>Stratey Consultant</em></p>
            <li>Worked with Head of Enterprise Marketing to research effective SMB-focused B2B marketing strategies</li>
            <li>Compiled several 100+ page reports detailing research on messaging, marketing channels, and property structures</li>
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
              <li>Python</li>
              <li>Java</li>
              <li>C/C++</li>
              <li>Golang</li>
              <li>SQL</li>
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

  renderLinks() {
    return (
      <div className="subpart-body">
        <Row>
          <Col xs={12} md={12} className="subpart-links">
            <a
              className="subpart-title"
              href="https://github.com/michellebrier"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="images" alt="GitHub" />
            </a>
            <a
              className="subpart-title"
              href="https://www.linkedin.com/in/briermichelle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="images" alt="LinkedIn" />
            </a>
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
      linksOpen,
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
          <div className={cx('nav-container', { home: homeOpen })} style={{zIndex: '1'}}>
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
          <div className={cx('subpart-container', { show: linksOpen })}>
            <h3 className="subpart-header">Links</h3>
            {this.renderLinks()}
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
