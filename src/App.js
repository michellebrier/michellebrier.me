import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import ReactGA from 'react-ga';

import './App.css';

import ProjectsPage from './pages/ProjectsPage';
import LinksPage from './pages/LinksPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';

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
    this.setState({ linksOpen: false });
    this.setState({ projectsOpen: false });
    this.setState({ homeOpen: true });
  }

  openEducation() {
    this.setState({ educationOpen: true });
    this.setState({ experienceOpen: false });
    this.setState({ skillsOpen: false });
    this.setState({ linksOpen: false });
    this.setState({ projectsOpen: false });
    this.setState({ homeOpen: false });
  }

  openExperience() {
    this.setState({ experienceOpen: true });
    this.setState({ educationOpen: false });
    this.setState({ skillsOpen: false });
    this.setState({ linksOpen: false });
    this.setState({ projectsOpen: false });
    this.setState({ homeOpen: false });
  }

  openSkills() {
    this.setState({ skillsOpen: true });
    this.setState({ experienceOpen: false });
    this.setState({ educationOpen: false });
    this.setState({ linksOpen: false });
    this.setState({ projectsOpen: false });
    this.setState({ homeOpen: false });
  }

  openLinks() {
    this.setState({ experienceOpen: false });
    this.setState({ skillsOpen: false });
    this.setState({ educationOpen: false });
    this.setState({ linksOpen: true });
    this.setState({ projectsOpen: false });
    this.setState({ homeOpen: false });
  }

  openProjects() {
    this.setState({ experienceOpen: false });
    this.setState({ skillsOpen: false });
    this.setState({ educationOpen: false });
    this.setState({ linksOpen: false });
    this.setState({ projectsOpen: true });
    this.setState({ homeOpen: false });
  }

  renderNavigation() {
    return (
      <div>
        <p className={cx('nav-link', { active: this.state.educationOpen })} onClick={() => this.openEducation()}>Education</p>
        <p className={cx('nav-link', { active: this.state.experienceOpen })} onClick={() => this.openExperience()}>Experience</p>
        <p className={cx('nav-link', { active: this.state.skillsOpen })} onClick={() => this.openSkills()}>Skills</p>
        <p className={cx('nav-link', { active: this.state.projectsOpen })} onClick={() => this.openProjects()}>Projects</p>
        <p className={cx('nav-link', { active: this.state.linksOpen })} onClick={() => this.openLinks()}>Links</p>
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
      projectsOpen,
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
            <EducationPage />
          </div>
          <div className={cx('subpart-container', { show: experienceOpen })}>
            <h3 className="subpart-header">Experience</h3>
            <ExperiencePage />
          </div>
          <div className={cx('subpart-container', { show: skillsOpen })}>
            <h3 className="subpart-header">Skills</h3>
            <SkillsPage />
          </div>
          <div className={cx('subpart-container', { show: projectsOpen })}>
            <h3 className="subpart-header">Projects</h3>
            <ProjectsPage />
          </div>
          <div className={cx('subpart-container', { show: linksOpen })}>
            <h3 className="subpart-header">Links</h3>
            <LinksPage />
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
