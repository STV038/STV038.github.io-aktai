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

import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Build from './services/Build';

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
  const [openLegal, setOpenLegal] = useState(false);
  const toggleLegal = () => setOpenLegal(!openLegal);

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
              <Col sm="10" md="10" lg="4">
                <p className="mb-3">
                  Whether you are already active in the crypto space,
                  looking to invest in it, or wanting to integrate
                  decentralized technologies into your organization;
                  we can help you navigate through the technological
                  and regulatory complexities.
                </p>
                {/* By leveraging our
                  expertise we can help you make your decentralized
                  journey strengthen your and add comfort to that
                  journey by leveraging our expertise and help you
                  grow (crypto) or onboard decentralized technologies
                  into your organization. */}
              </Col>
            </Row>
            <Row className="justify-content-around text-center match-height pt-5">
              <Col sm="10" md="10" lg="3" xl="3" className="mb-5">
                <Card body>
                  <CardTitle>
                    <FontAwesomeIcon
                      icon={faEthereum}
                      size="7x"
                      id="icon"
                    />
                    <h4 className="pt-4">Build / Already active</h4>
                    <p>
                      This is a wider card with supporting text below
                      as a natural lead-in to additional content. This
                      content is a little bit longer.
                    </p>
                  </CardTitle>
                  <CardText>
                    <Build />
                  </CardText>
                </Card>
              </Col>
              <Col sm="10" md="10" lg="3" xl="3" className="mb-5">
                <FontAwesomeIcon
                  icon={faCommentsDollar}
                  size="7x"
                  id="icon"
                />
                <h4 className="pt-4">Enter</h4>
                <p>
                  (e.g. governmental bodies, corporation, financial
                  institutions)
                </p>
              </Col>
              <Col sm="10" md="10" lg="3" xl="3" className="mb-5">
                <FontAwesomeIcon
                  icon={faSyncAlt}
                  size="7x"
                  id="icon"
                />
                <h4 className="pt-4">Integrate</h4>
                <p>
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content
                  is a little bit longer.
                </p>
              </Col>
            </Row>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Services;
