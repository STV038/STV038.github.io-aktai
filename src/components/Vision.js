import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { Transition } from 'react-transition-group';

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

const Vision = () => {
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
                <span style={{ fontFamily: 'Anurati' }}>V</span>
                ision
              </h1>
            </Row>
            <Row className="mb-5">
              <hr className="new1" />
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="6" style={{ textAlign: 'center' }}>
                <p>
                  2014 marked our introduction to the world of
                  Bitcoin. The concept of having a digital currency -
                  absent of any physicial backing in the traditional
                  sense of currencies - and use that currency to buy
                  (physical) goods on the internet was mind boggling
                  and exciting at the same time. As with all things
                  that are exciting, we dove into the world of Bitcoin
                  and the broader digital asset space and came to
                  truly appreciate it's potential for society and
                  financial systems. Throughout the following years
                  that appreciation has turned into conviction, and
                  has ultimately led to the foundation of Aktai
                  Ventures:{' '}
                  <strong>
                    a firm dedicated to the adoption of decentralized
                    technologies and make digital assets accessible to
                    society.
                  </strong>
                </p>
                <p>
                  Despite our conviction of the potential of this
                  space, we also acknowledge that we are in the early
                  stages of it. Like all emergent spaces, the digital
                  asset space currently lacks the robustness and
                  regulatory framework for widescale adoption.
                  Governments are struggling to interpret and regulate
                  this emerging space and the majority of
                  organizations are reluctant to integrate
                  decentralized technologies. As adoption increases,
                  we believe that companies will increasingly expect
                  proper risk management and governance and demand
                  some degree of comfort (e.g. in the form of
                  assurance) of over decentralized products. Crypto
                  firms will need to look for assurance, embed
                  effective risk & control management and show their
                  products are secure and operating as intended
                  (including the governance surrounding the product).
                </p>
                <p>
                  At Aktai Ventures we offer a unique set of
                  capabilities to help crypto startups in that regard.
                  We are able to translate the concerns, needs and
                  requirements of the regulators, investors and
                  (institutional) clients to the decentralized
                  technology space. At the same time we want to assist
                  organizations that are looking to venture into the
                  digital asset space or are looking to integrate
                  decentralized technologies in their organization.
                </p>
              </Col>
            </Row>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Vision;
