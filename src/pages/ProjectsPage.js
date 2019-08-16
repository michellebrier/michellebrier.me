import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import optixPreview from '../images/optix_pathtracer.png';
import pathtracerOne from '../images/pathtracer1.png';
import pathtracerTwo from '../images/pathtracer2.png';
import mesh from '../images/mesh.png';
import rasterizer from '../images/rasterizer.png';

import './ProjectsPage.css';

export default class ProjectsPage extends Component {
	render() {
		return (
			<Grid>
	      <div className="subpart-body">
	        <Row>
	          <Col xs={12} md={12} className="subpart-text">
	          	<div className="preview-container">
							  <h3 className="title">OptiX-Accelerated Pathtracer</h3>
							  <div className="content">
							    <a
							    	href="http://www.peterqiu.com/cs184-final-project-proposal/final.html"
							    	target="_blank"
							    	rel="noopener noreferrer"
							    >
							      <div className="content-overlay"></div>
							      <img className="content-image" src={optixPreview} />
							      <div className="content-details fadeIn-bottom">
							        <h3 className="content-title">OptiX-Accelerated Pathtracer</h3>
							        <p className="content-text">Accelerating pathtracing with NVIDIA’s CUDA and OptiX ray tracing engines</p>
							      </div>
							    </a>
							  </div>
							</div>

							<div className="preview-container">
							  <h3 className="title">Simple Pathtracer (Pt 1)</h3>
							  <div className="content">
							    <a
							    	href="https://cal-cs184-student.github.io/p3-1-pathtracer-michellebrier/"
							    	target="_blank"
							    	rel="noopener noreferrer"
							    >
							      <div className="content-overlay"></div>
							      <img className="content-image" src={pathtracerOne} />
							      <div className="content-details fadeIn-bottom">
							        <h3 className="content-title">Simple Pathtracer</h3>
							        <p className="content-text">Part 1 of a simple pathtracer</p>
							      </div>
							    </a>
							  </div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={12} className="subpart-text">
							<div className="preview-container">
							  <h3 className="title">Simple Pathtracer (Pt 2)</h3>
							  <div className="content">
							    <a
							    	href="https://cal-cs184-student.github.io/p3-2-pathtracer-michellebrier/"
							    	target="_blank"
							    	rel="noopener noreferrer"
							    >
							      <div className="content-overlay"></div>
							      <img className="content-image" src={pathtracerTwo} />
							      <div className="content-details fadeIn-bottom">
							        <h3 className="content-title">Simple Pathtracer</h3>
							        <p className="content-text">Part 2 of a simple pathtracer</p>
							      </div>
							    </a>
							  </div>
							</div>

							<div className="preview-container">
							  <h3 className="title">Mesh Editor</h3>
							  <div className="content">
							    <a
							    	href="https://cal-cs184-student.github.io/p2-meshedit-michellebrier/"
							    	target="_blank"
							    	rel="noopener noreferrer"
							    >
							      <div className="content-overlay"></div>
							      <img className="content-image" src={mesh} />
							      <div className="content-details fadeIn-bottom">
							        <h3 className="content-title">Mesh Editor</h3>
							        <p className="content-text">A mesh editor for mesh renderings</p>
							      </div>
							    </a>
							  </div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={12} className="subpart-text">
							<div className="preview-container">
							  <h3 className="title">Rasterizer</h3>
							  <div className="content">
							    <a
							    	href="https://cal-cs184-student.github.io/p1-rasterizer-michellebrier/"
							    	target="_blank"
							    	rel="noopener noreferrer"
							    >
							      <div className="content-overlay"></div>
							      <img className="content-image" src={rasterizer} />
							      <div className="content-details fadeIn-bottom">
							        <h3 className="content-title">Rasterizer</h3>
							        <p className="content-text">An image rasterizer</p>
							      </div>
							    </a>
							  </div>
							</div>
	          </Col>
	        </Row>
	      </div>
	    </Grid>
	    );
	}
}
