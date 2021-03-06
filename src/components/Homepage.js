import React from 'react';
import { Container, Row } from 'reactstrap';
import { Transition } from 'react-transition-group';
import Particles from './Particles';

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

const Homepage = () => {
  return (
    <div className="App">
      <Container className="content-position">
        <Transition in={true} appear={true} timeout={200}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <Row className="justify-content-center">
                <h1 className="text-light mb-3">
                  <span style={{ fontFamily: 'Anurati' }}>A</span>ktai
                  <span
                    style={{
                      marginLeft: '1rem',
                      fontFamily: 'Anurati',
                    }}
                  >
                    V
                  </span>
                  entures
                </h1>
              </Row>
              <Row>
                <hr className="new1" />
              </Row>
              <Row className="justify-content-center">
                <p className="text-light subtext">
                  Contributing to the development and integration of
                  decentralized technologies in society and current
                  financial systems
                </p>
              </Row>
              <Row className="justify-content-center">
                <Particles />
              </Row>
            </div>
          )}
        </Transition>
      </Container>
    </div>
  );
};

export default Homepage;
