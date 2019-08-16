import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class EducationPage extends Component {
	render() {
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
                <li>CS 184: Computer Graphics and Imaging</li>
                <li>CS 162: Operating Systems and System Programming</li>
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
}
