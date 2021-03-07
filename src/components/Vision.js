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
              <p className=" subtext">
                Here we will document our stuff with respect to the
                services and products that we want to offer. Here we
                will document our stuff with respect to the services
                and products that we want to offer.
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
