import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Craze.css';
import crazeLogo from '../../img/craze.png';
import hand from '../../img/hand.png';
import mac from '../../img/icons/mac.png';
import android from '../../img/icons/android.png';
import windows from '../../img/icons/windows.png';

class App extends Component {
  renderDesktop() {
    return (
      <div className="CrazeHeader">
        <header className="CrazeHeader header">
          <Row className="CrazeHeader__row noPadding">
            <Col xs={15}>
              <Row>
                <Col xs={6} xsHidden className="CrazeHeader__logoSection">
                  <Row>
                    <Col xs={15}>
                      <img src={crazeLogo} />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={15} className="CrazeHeader__logoSection__subTitle">
                      <p>A great new free psd theme to showcase your new app. </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={15}>
                      <a href="#" className="CrazeHeader__OS">
                        <img src={mac} />
                      </a>
                      <a href="#" className="CrazeHeader__OS">
                        <img src={android} />
                      </a>
                      <a href="#" className="CrazeHeader__OS">
                        <img src={windows} />
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col xs={6} xsHidden className="CrazeHeader__hand">
                  <img src={hand} />
                </Col>
              </Row>
            </Col>
          </Row>
        </header>
        <Row>
          <Col xs={15} className="CrazeFeatures textAlignCenter">
            Craze Features
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <Grid>
          {this.renderDesktop()}
        </Grid>
      </div>
    );
  }
}

export default App;
