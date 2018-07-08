import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Craze.css';

import crazeLogo from '../../img/craze.png';
import hand from '../../img/hand.png';
import mac from '../../img/icons/mac.png';
import android from '../../img/icons/android.png';
import windows from '../../img/icons/windows.png';
import featuresflatDesign from '../../img/icons/features/flatDesign.png';
import featuresMarketable from '../../img/icons/features/marketable.png';
import featuresEditPhotos from '../../img/icons/features/editPhotos.png';
import featuresEditColors from '../../img/icons/features/editColors.png';
import featuresUserFriendly from '../../img/icons/features/userFriendly.png';
import featuresEditable from '../../img/icons/features/editable.png';
import socialTwitter from '../../img/icons/social/twitter.png';
import socialFacebook from '../../img/icons/social/facebook.png';
import socialPinterest from '../../img/icons/social/pinterest.png';
import socialGplus from '../../img/icons/social/gplus.png';
import socialLinkedin from '../../img/icons/social/linkedin.png';
import socialYoutube from '../../img/icons/social/youtube.png';



/* COMPONENTS */
import CrazeFeature     from '../CrazeFeature/CrazeFeature';
import CrazePricingItem from '../CrazePricingItem/CrazePricingItem';
import CrazeCarousel from '../CrazeCarousel/CrazeCarousel';

class Craze extends Component {
  constructor(props) {
    super();
    this.state = {
      features: [
        {
          icon: featuresflatDesign,
          name: "Flat Design",
          border: true
        },
        {
          icon: featuresMarketable,
          name: "Marketable",
          border: true
        },
        {
          icon: featuresEditPhotos,
          name: "Edit Photos",
          border: true
        },
        {
          icon: featuresEditColors,
          name: "Edit Colors"
        },
        {
          icon: featuresUserFriendly,
          name: "User Friendly"
        },
        {
          icon: featuresEditable,
          name: "100% Editable"
        }
      ],
      pricing: [
        {
          name: "Basic",
          price: "$19",
          cents: "99"
        },
        {
          name: "Standard",
          price: "$39",
          cents: "99"
        },
        {
          name: "Deluxe",
          price: "$59",
          cents: "99",
          big: true
        },
        {
          name: "Unlimited",
          price: "$79",
          cents: "99"
        }
      ]
    }
  }
  renderDesktop() {
    return (
      <div id="appDesktop">
        <div className="CrazeHeaderContent">
            <Row className="CrazeHeader__row noPadding">
              <Col lg={1} mdHidden smHidden xsHidden />
              <Col lg={5} md={6} className="CrazeHeader__logoSection">
                <Row>
                  <Col>
                    <img src={crazeLogo} />
                  </Col>
                </Row>
                <Row>
                  <Col className="CrazeHeader__logoSection__subTitle">
                    <p>A great new free psd theme to showcase your new app. </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="CrazeHeader__sectionOS">
                    <a href="javascript:return false;" className="CrazeHeader__OS">
                      <img src={mac} />
                    </a>
                    <a href="javascript:return false;" className="CrazeHeader__OS">
                      <img src={android} />
                    </a>
                    <a href="javascript:return false;" className="CrazeHeader__OS">
                      <img src={windows} />
                    </a>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6} smHidden xsHidden className="CrazeHeader__hand">
                <img src={hand} />
              </Col>
            </Row>
        </div>

        <div className="CrazeFeatures">
          <Row>
            <Col lg={12} className="textAlignCenter">
              Craze Features
            </Col>
            <Col lg={12} className="CrazeFeatures__subtitle">
              <Row>
                <Col lg={1} />
                <Col lg={10}>
                  Lorem ipsum dolor sit amet, pro aeterno adipisci ex, pro no iriure accusam. Eros admodum intellegat ex mea, mei wisi nullam ne, qui cu aliquid nominavi. Est habemus maiestatis ut. Vim quod elitr interesset ea.
                </Col>
                <Col lg={1} />
              </Row>
            </Col>
          </Row>
        </div>

        <Row className="CrazeFeaturesContent">
          {this.state.features.map(
            (feature, i) => {
              return (<CrazeFeature key={i} feature={feature} />)
            }
          )}
        </Row>

        <div className="CrazeAbout">
          <Row className="CrazeAbout__container">
            <Col lg={6} md={6} xs={12}>
              <Row>
                <Col lg={12} md={12} xs={12}>
                  <p className="CrazeAbout__title">
                    Whats Craze all About?
                  </p>
                </Col>
                <Col lg={12} md={12} xs={12}>
                  <p className="CrazeAbout__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla nisl congue congue. Maecenas nec condimentum libero, at elementum mauris.
                    <br /><br />
                    Phasellus eget nisi dapibus, ultricies nisl at, hendrerit risusuis ornare luctus id sollicitudin ante lobortis at.
                  </p>
                </Col>
                <Col lg={12} md={12} xs={12} className="CrazeAbout__subContainer">
                  <p className="CrazeAbout__subItem">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="CrazeAbout__subItem">
                    Lorem ipsum dolor sit amet consectetur elt
                  </p>
                </Col>
              </Row>

            </Col>
            <Col lg={6} md={6} xs={12} className="textAlignCenter">
              <iframe
                className="CrazeAbout_player"
                src="https://player.vimeo.com/video/253989945"
                border="0"
                allowFullScreen />
            </Col>
          </Row>
        </div>

        <div className="CrazeCarousel">
          <CrazeCarousel />
        </div>

        <div className="CrazePricing">
          <div className="CrazePricing__wrapper">
            <p className="CrazePricing__title">
              Pricing Plans
            </p>
            <Row className="CrazePricing__container">
              <Col lg={1} mdHidden smHidden xsHidden />
              <Col lg={10} md={12} xs={12}>
                <p className="CrazePricing__text">
                  Lorem ipsum dolor sit amet, pro aeterno adipisci ex, pro no iriure accusam. Eros admodum intellegat ex mea, mei wisi nullam ne, qui cu aliquid nominavi. Est habemus maiestatis ut. Vim quod elitr interesset ea.
                </p>
              </Col>
              <Col lg={1} mdHidden smHidden xsHidden />
            </Row>
            <Row className="CrazePricing__containerD">
              {this.state.pricing.map(
                (item, i) => {
                  return (
                    <CrazePricingItem
                      name={item.name}
                      price={item.price}
                      cents={item.cents}
                      big={item.big}
                    />
                  )
                }
              )}
            </Row>
          </div>
        </div>

        <div className="CrazeGetInTouch">
          <p className="CrazeGetInTouch__title">
            Say Hi & Get in Touch
          </p>
          <p className="CrazeGetInTouch__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
          </p>
          <ul className="CrazeGetInTouch__social">
            <li><a href="javascript:return false;"><img src={socialTwitter} /></a></li>
            <li><a href="javascript:return false;"><img src={socialFacebook} /></a></li>
            <li><a href="javascript:return false;"><img src={socialPinterest} /></a></li>
            <li><a href="javascript:return false;"><img src={socialGplus} /></a></li>
            <li><a href="javascript:return false;"><img src={socialLinkedin} /></a></li>
            <li><a href="javascript:return false;"><img src={socialYoutube} /></a></li>
          </ul>
        </div>
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

export default Craze;
