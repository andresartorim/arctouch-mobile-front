import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './CrazeCarousel.css';

class CrazeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0,
      previousItem: undefined,
      timeout: 0,
      testimonials: [
        {
          name: "John Doe",
          text: "Lorem ipsum dolor sit amet, pro aeterno adipisci ex, pro no iriure accusam. Eros admodum intellegat ex mea, mei wisi nullam ne, qui cu aliquid nominavi."
        },
        {
          name: "Sarah Hunt",
          text: "Craze is one of the most complete app packages I have ever come across. I Would highly reccomend it to anyone"
        },
        {
          name: "Martin Fowler",
          text: "Lorem ipsum dolor sit amet, pro aeterno adipisci ex, pro no iriure accusam."
        }
      ]
    }
  }

  clickBullet(index, timeout) {
    if(timeout) {
      clearInterval(this.state.timeout);
    }
    this.setState({
      currentItem: index,
      previousItem: this.state.currentItem
    });
  }

  autoBullets() {
    let tTime = setInterval(
      function() {

        let bullet = this.state.currentItem+1;
        if(this.state.currentItem+1 == this.state.testimonials.length) {
          bullet = 0;
        }
        this.clickBullet(bullet);
      }
      .bind(this),
      4000
    );
    this.setState({
      timeout: tTime
    });
  }


  renderCrazeTestimonial() {
    return this.state.testimonials.map((item, index) => {
      const { previousItem, currentItem } = this.state;
      let shown = index === currentItem;
      let shownClass = shown ? " CrazeCarousel__itemTestimonial--shown" : "";
      let leavingClass = index === previousItem ? "CrazeCarousel__itemTestimonial--leaving" : "";
      let classNames = `CrazeCarousel__itemTestimonial ${shownClass} ${leavingClass}` ;

      return (
        <Row key={index} className={classNames} aria-hidden={!shown}>
          <Col lg={12}>
            "{item.text}"
          </Col>
          <Col lg={12}>
            {item.name}
          </Col>
        </Row>
      )
    })
  }

  componentDidMount() {
    this.autoBullets();
  }

  renderBullets() {
    return (
      <ul className='CrazeCarousel__dots'>
        {
          this.state.testimonials.map((_i, index) => {
            const { currentItem } = this.state;

            let active = index === currentItem;
            let activeClass = active ? "CrazeCarousel__itemTestimonial__dot--active" : "";
            let classNames = `CrazeCarousel__itemTestimonial__dot ${activeClass}` ;
            let id = `CrazeCarousel__dot__${index}`;
            return (
              <li key={index} className={classNames} key={index}>
                <input className='CrazeCarousel__dotInput'
                  id={id}
                  type='radio'
                  name='CrazeCarousel-dots'
                  value={index} onChange={this.clickBullet.bind(this, index, true)}
                />
                <label htmlFor={id}/>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render () {
    return (
      <div className='CrazeCarousel'>
        <div className='CrazeCarousel__testimonial'>
          {this.renderCrazeTestimonial()}
        </div>
        {this.renderBullets()}
      </div>
    )
  }

}

export default CrazeCarousel;
