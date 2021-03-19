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
            <Row className="justify-content-center text-center pb-5">
              <Col sm="10" md="10" lg="6">
                <p>
                  In 2014 we were was first introduced to the world of
                  Bitcoin. The concept of having a digital currency -
                  absent of any physical backing in the traditional
                  sense of currencies - and being able to use that
                  currency to buy (physical) goods on the internet was
                  mind boggling and exciting at the same time. As with
                  all things that are exciting, we dove into the world
                  of Bitcoin and the broader crypto space and came to
                  truly appreciate its potential for society and
                  financial systems. Throughout the following years
                  that appreciation has turned into conviction, and
                  has ultimately led to the founding of Aktai
                  Ventures:{' '}
                  <strong>
                    a collaboration dedicated to supporting the
                    adoption of decentralized technologies and making
                    decentralized technologies accessible to society.
                  </strong>
                </p>
                <p>
                  Whilst we are convinced of the enormous potential of
                  the technology, it should be acknowledged that we
                  are in the early stages of it. Like all emergent
                  spaces, the crypto space currently lacks the
                  robustness and regulatory framework for wide scale
                  adoption. Governments are struggling to understand,
                  interpret and regulate this emerging space and the
                  majority of organizations are reluctant to integrate
                  decentralized technologies due to the uncertainty
                  that this creates. As adoption increases, we believe
                  that regulators, investors and users will
                  increasingly expect proper risk management and
                  governance and look for some degree of comfort over
                  decentralized technologies. Organizations operating
                  in this space will need to look for assurance, embed
                  effective risk & control management and show that
                  their products are secure and operating as intended
                  (including the governance surrounding the product).
                </p>
                <p>
                  At Aktai Ventures we offer a unique set of
                  experience and capabilities to help these
                  organizations in that regard. We are able to
                  translate the concerns, needs and requirements of
                  the regulators, investors and (institutional)
                  clients to the decentralized technology space. At
                  the same time we want to assist organizations to
                  comfortably advance into the crypto space or are
                  looking to integrate decentralized technologies in
                  their organization.
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
