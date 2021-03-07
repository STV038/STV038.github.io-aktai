import * as React from 'react';
import { Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import { Transition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';

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

// <FontAwesomeIcon icon={faChessKnight} size="3x" id="icon" />;
const Services = () => {
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
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="pb-3">
                <Card body>
                  <CardTitle tag="h5">
                    Operating in crypto asset space
                  </CardTitle>
                  <CardText>
                    Here we will document our stuff with respect to
                    the services and products that we want to offer.
                    Strategy, horse-chess piece icon finance and
                    accounting, icon deals, handshake icon risk,
                    governance, icon integration, symbiosis or
                    something
                  </CardText>
                </Card>
              </Col>
              <Col sm="12" lg="4">
                <Card body>
                  <CardTitle tag="h5">
                    Entering crypto asset space
                  </CardTitle>
                  <CardText>
                    Here we will document our stuff with respect to
                    the services and products that we want to offer.
                    Strategy, horse-chess piece icon finance and
                    accounting, icon deals, handshake icon risk,
                    governance, icon integration, symbiosis or
                    something
                  </CardText>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="pb-3">
                <Card body>
                  <CardTitle tag="h5">
                    Risk Management, Risk & Controls?
                  </CardTitle>
                  <CardText>
                    Business Process, integration, etc. Control
                    frameworks etc.
                  </CardText>
                </Card>
              </Col>
              <Col sm="12" lg="4">
                <Card body>
                  <CardTitle tag="h5">
                    Financial Reporting & Tokeneconomics
                  </CardTitle>
                  <CardText>
                    Some stuff about auditing, financial reporting,
                    financials, etc.
                  </CardText>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="pb-3">
                <Card body>
                  <CardTitle tag="h5">Strategy, maturity</CardTitle>
                  <CardText>
                    Business Process, integration, etc. Control
                    frameworks etc.
                  </CardText>
                </Card>
              </Col>
              <Col sm="12" lg="4">
                <Card body>
                  <CardTitle tag="h5">
                    Regulation, Compliance & Tax
                  </CardTitle>
                  <CardText>
                    Some stuff about auditing, financial reporting,
                    financials, etc.
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
