import * as React from 'react';
// import { useState } from 'react';
import { Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import { Transition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
// import Tabs from './services/Tabs';

import '../assets/transition.scss';

const duration = 2000;

const defaultStyle = {
  transition: `opacity ${duration}ms linear`,
  transitionDuration: '2000ms',
  opacity: 0,
};

const transitionStyles = {
  appear: { opacity: 0 },
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

//advisory.kpmg.us/services/risk-assurance/internal-audit-enterprise-risk.html
//advisory.kpmg.us/services/risk-assurance.html
//advisory.kpmg.us/services/technology/emerging-technology-risk.html
//advisory.kpmg.us/services/risk-assurance/it-audit-assurance.html

const Services = () => {
  // developing decentralized technologies and products
  // active in crypto space
  // looking to operate or invest in decentralized technologies
  //

  return (
    <div>
      <Transition in={true} appear={true} timeout={200}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Row className="justify-content-center">
              <h1 className=" mb-3">
                <span style={{ fontFamily: 'Anurati' }}>S</span>
                ervices
              </h1>
            </Row>
            <Row className="mb-5">
              <hr className="new1" />
            </Row>
            <Row className="justify-content-center text-center">
              <Col sm="10" md="10" lg="3">
                <p className="mb-3">
                  Whether you are already operating in the crypto
                  space or looking to step into that space (e.g.
                  governmental bodies, corporation, financial
                  institutions), we can add comfort to that journey by
                  leveraging our expertise and help you grow (crypto)
                  or onboard decentralized technologies into your
                  organization.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center text-center match-height pt-5">
              <Col sm="10" md="10" lg="4" xl="4">
                <Card body>
                  <CardTitle className="pb-4">
                    <FontAwesomeIcon
                      icon={faEthereum}
                      size="7x"
                      id="icon"
                    />
                  </CardTitle>
                  <CardTitle tag="h4">
                    Building digital asset products
                  </CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as
                    a natural lead-in to additional content. This
                    content is a little bit longer.
                  </CardText>
                </Card>
              </Col>
              <Col sm="10" md="10" lg="4" xl="4">
                <Card body>
                  <CardTitle className="pb-4">
                    <FontAwesomeIcon
                      icon={faSeedling}
                      size="7x"
                      id="icon"
                    />
                  </CardTitle>
                  <CardTitle tag="h4">
                    Entering the digital asset space
                  </CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as
                    a natural lead-in to additional content. This
                    content is a little bit longer.
                  </CardText>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Services;
