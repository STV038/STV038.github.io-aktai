import * as React from 'react';
import { Row } from 'reactstrap';
import { Transition } from 'react-transition-group';

import ParticlesFooter from '../assets/ParticlesFooter';
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
            <Row>
              <hr className="new1" />
            </Row>
            <Row className="justify-content-center">
              <p>
                Like it or not, but crypto assets and decentralized
                finance are here to stay and have yet to take up a
                significant spot in our financial systems. That isn't
                to say that DeFi, like the entire crypto space, will
                be faced with pullbacks and bear cycles; such
                occurences are inherent to emergent markets. It is my
                opinion however, that the crypto asset space is here
                to stay and that the products that are being developed
                on these decentralized technologies will completely
                change the way we think about personal finance and
                transacting with eachother. Imagine not using a bank
                for your finances anymore, but instead using your
                savings to generate money for you instead of your
                bank's shareholders. Or using different service
                providers to be able to invest in stocks, take out a
                mortgage or loan, taking out an insurance, or the
                simple act of sending money to people around the globe
                without having a bank account to do so. Be the sole
                owner of your entire finances and assets. And using
                your finances and assets to increase{' '}
                <strong>your</strong> wealth.
              </p>
            </Row>
          </div>
        )}
      </Transition>
      <Transition in={true} appear={true} timeout={200}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <nav class="navbar fixed-bottom particle-footer">
              <ParticlesFooter />
            </nav>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Vision;
