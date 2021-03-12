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
              <Col sm="12" lg="6">
                <p>
                  2014 marked our introduction to the world of
                  Bitcoin. The concept of having a digital currency -
                  absent of any physicial backing in the traditional
                  sense of currencies - and use that currency to buy
                  (physical) goods on the internet was mind boggling
                  and exciting at the same time. As with all things
                  that are exciting, we dove into the world of Bitcoin
                  and the broader crypto space and came to truly
                  appreciate it's potential for society and financial
                  systems.
                </p>
                <p>
                  The recent rise of Decentralized Finance (DeFi)
                  protocols substantiates that potential. DeFi aims to
                  build a completely decentralized financial
                  infrastructure on blockchain networks, thereby
                  replacing centralized financial services that are
                  traditionally offered only by financial
                  institutions. With over $42B locked in DeFi
                  products, it is increasingly apparent that DeFi will
                  have a major impact on our current financial systems
                  and significantly increase efficiency, transparancy
                  and interoperability of financial services.
                </p>
                <p>
                  To us, DeFi demonstrates that decentralized
                  technologies are here to stay and that the products
                  that are being developed on these technologies will
                  completely change the way we think about (personal)
                  finance and transacting with eachother. At the same
                  time we understand that the digital asset space is
                  an emergent one that is currently faced with a lack
                  of regulation, maturity and robustness comparable to
                  e.g. traditional finance. Governments are struggling
                  to interpret and regulate this emerging space and to
                  many actors - from individuals to financial
                  institutions or organizations - lacks sufficient
                  'skin in the game' in order to be adopted.
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
