import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './CrazePricingItem.css';

class CrazePricingItem extends Component {
  render() {
    let featureExtra;
    let crazePricingClass = "CrazePricingItem" + (this.props.big ? " CrazePricingItem_big" : "");
    if(this.props.big) featureExtra = <li>Feature 6</li>;
    return (
      <Col lg={3} md={3} sm={3} className={crazePricingClass}>
        <div className="CrazePricingItem__title">
          {this.props.name}
        </div>
        <div className="CrazePricingItem__price">
          {this.props.price}
          <div className="CrazePricingItem__cents">
            {this.props.cents}
          </div>
        </div>
        <div className="CrazePricingItem__features">
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
            {featureExtra}
          </ul>
        </div>
        <div className="CrazePricingItem__buttonSection">
          <a href="javascript:return false;" className="CrazePricingItem__purchase">
            PURCHASE
          </a>
        </div>
      </Col>
    );
  }
}

export default CrazePricingItem;
