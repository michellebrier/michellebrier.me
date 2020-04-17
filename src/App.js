import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Grid, Row, Col } from "react-bootstrap";
import ReactGA from "react-ga";

import "./App.css";

class App extends Component {
  initializeReactGA() {
    ReactGA.initialize("UA-131401093-1");
    ReactGA.pageview("/homepage");
  }

  componentDidMount() {
    this.initializeReactGA();
  }

  renderHeader() {
    return (
      <div>
        <div className="header sectionHeader">Michelle Brier</div>
        <div className="section">
          <b>Software Engineer</b>
          {} | {}
          <a
            href="https://github.com/michellebrier"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          {} | {}
          <a
            href="https://www.linkedin.com/in/briermichelle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  }

  renderEducation() {
    return (
      <div className="section">
        <div className="sectionHeader">Education</div>
        <div className="text">
          UC Berkeley
          <br />
          [Aug. 2016 - May 2020]
          <br />
          B.A. Computer Science
          <br />
          GPA: 3.7
        </div>
      </div>
    );
  }

  renderExperience() {
    return (
      <div className="section">
        <div className="sectionHeader">Experience</div>
        <div className="text">
          <a
            href="https://www.flexport.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flexport
          </a>
          <br />
          [Upcoming: Aug. 2020 -]
          <br />
          Software Engineer
        </div>
        <div className="text">
          <a
            href="https://www.flexport.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flexport
          </a>
          <br />
          [May 2019 - Aug. 2019]
          <br />
          Software Engineering Intern
        </div>
        <div className="text">
          <a
            href="https://www.gethearth.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shogun Enterprises (DBA Hearth)
          </a>
          <br />
          [May 2018 - Aug. 2018]
          <br />
          Software Engineering Intern
        </div>
        <div className="text">
          <a
            href="https://xeniagifts.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Xenia Gifts
          </a>
          <br />
          [Sept. 2017 - Jan. 2018]
          <br />
          Software Engineering Intern
        </div>
      </div>
    );
  }

  renderSkills() {
    return (
      <div class="section">
        <div className="sectionHeader">Skills</div>
        <div className="text">
          GENERAL: Python, Java, C/C++, Golang, SQL, Pandas, NumPy, Vim
        </div>
        <div className="text">
          WEB: Ruby on Rails, React.js, Jinja2, HTML/CSS, JavaScript, HTTP
        </div>
        <div className="text">MOBILE: React Native</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Michelle Brier</title>
          <meta charset="utf-8" />
          <meta id="og:author" property="og:author" content="Michelle Brier" />
          <meta name="author" content="Michelle Brier" />
          <meta
            name="description"
            content="Michelle Brier - Online Portfolio"
          />
        </Helmet>
        <Grid>
          <Row className="bodyRow">
            <Col mdOffset={4} md={4}>
              {this.renderHeader()}
              {this.renderEducation()}
              {this.renderExperience()}
              {this.renderSkills()}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
