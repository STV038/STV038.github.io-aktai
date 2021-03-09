import * as React from 'react';
import { useState } from 'react';
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Collapse,
} from 'reactstrap';
import { Transition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
  const [isOpen1, setIsOpen1] = useState(false);
  const toggle1 = () => setIsOpen1(!isOpen1);

  const [isOpen2, setIsOpen2] = useState(false);
  const toggle2 = () => setIsOpen2(!isOpen2);

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
                  <CardTitle
                    onClick={toggle1}
                    tag="h5"
                    className="expand-card"
                  >
                    <div>Strategy, maturity</div>
                    <FontAwesomeIcon icon={faChevronDown} id="icon" />
                  </CardTitle>
                  <Collapse isOpen={isOpen1}>
                    <CardText>
                      Business Process, integration, etc. Control
                      frameworks etc.
                    </CardText>
                  </Collapse>
                </Card>
              </Col>
              <Col sm="12" lg="4">
                <Card body>
                  <CardTitle
                    tag="h5"
                    onClick={toggle2}
                    className="expand-card"
                  >
                    <div>Legal</div>
                    <FontAwesomeIcon icon={faChevronDown} id="icon" />
                  </CardTitle>
                  <Collapse isOpen={isOpen2}>
                    <CardText>
                      The regulatory and technological landscape
                      surrounding crypto assets and blockchain is
                      ambigious, moving fast and still maturing.
                      Governments are struggling to interpret the
                      implications of this space, which means that
                      regulations surrounding the development and use
                      of decentralized technologies is still
                      developing. Operating in such a world comes with
                      multiple challenges, as future regulation might
                      impact your business or governance model. We can
                      help you face these challenges so that you may
                      comply with current and future regulations and
                      best practices.
                      <ul>
                        <li>
                          Streamlining a business plan in light of the
                          relevant legal frameworks
                        </li>
                        <li>
                          Preemptively identifying legal risks and
                          help you address these
                        </li>
                        <li>
                          Design and implement best practices to meet
                          regulatory compliance.
                        </li>
                      </ul>
                    </CardText>
                  </Collapse>
                </Card>

                <Card body>
                  <CardTitle tag="h5">Research</CardTitle>
                  <CardText>
                    PhD research on smart contracts and comparative
                    contract law. Research on Information Risk
                    Management approaches for multi-party consensus
                    machines.
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
