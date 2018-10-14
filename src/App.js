import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Col, Row } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  renderNavigation() {
    return ["Education", "Experience", "Skills", "Interests"].map((entry) => {
      return ( 
        <a className="nav-link" href={"#" + entry}>{entry}</a>
      );
    })
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Michelle Brier</title>
          <meta charset="utf-8" />
          <meta id="og:author" property="og:author" content="Michelle Brier" />
          <meta name="author" content="Michelle Brier" />
          <meta name="description" content="Michelle Brier - Online Portfolio" />
        </Helmet>
        <Grid>
          <div className="nav-container">
            <Row>
              <Col md={4}>
                <h3 className="name">Michelle Brier</h3>
              </Col>
              <Col md={8}>
                  {this.renderNavigation()}
              </Col>
            </Row>
          </div>
        </Grid>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Michelle Brier
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
