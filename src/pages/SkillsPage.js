import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class SkillsPage extends Component {
	render() {
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
}
