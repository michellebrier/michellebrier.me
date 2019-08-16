import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import github from '../images/github.png';
import linkedin from '../images/linkedin.jpeg';

export default class LinksPage extends Component {
	render() {
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
}
