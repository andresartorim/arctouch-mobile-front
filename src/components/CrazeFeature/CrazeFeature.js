import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './CrazeFeature.css';

class CrazeFeature extends Component {
  render() {
    let crazeText = "CrazeFeatureItem__text" + (this.props.feature.border ? " CrazeFeatureItem__textWithBorder" : "");
    return (
      <Col lg={4} md={4} xs={6} className="CrazeFeatureItem">
        <div className="CrazeFeatureItem__icon">
          <img src={this.props.feature.icon} />
        </div>
        <label className="CrazeFeatureItem__name">
          {this.props.feature.name}
        </label>
        <p className={crazeText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla.
        </p>
      </Col>
    );
  }
}

export default CrazeFeature;
