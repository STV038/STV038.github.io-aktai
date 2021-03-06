import * as React from 'react';
import { Container, Row } from 'reactstrap';
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

const Services = () => {
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
                  <span style={{ fontFamily: 'Anurati' }}>S</span>
                  ervices
                </h1>
              </Row>
              <Row>
                <hr className="new1" />
              </Row>
              <Row className="justify-content-center">
                <p className="text-light subtext">
                  Here we will document our stuff with respect to the
                  services and products that we want to offer.
                </p>
              </Row>
            </div>
          )}
        </Transition>
      </Container>
    </div>
  );
};

export default Services;
