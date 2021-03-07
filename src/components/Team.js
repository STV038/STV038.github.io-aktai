import * as React from 'react';
import { Row, Col } from 'reactstrap';
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

const Team = () => {
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
              <h1 className="mb-3">
                <span style={{ fontFamily: 'Anurati' }}>T</span>
                eam
              </h1>
            </Row>
            <Row>
              <hr className="new1" />
            </Row>
            <Row className="justify-content-center text-center">
              <p className="mb-3">
                Aktai Ventures consists of veterans in the space of
                Finance, IT Risk & Compliance and Regulation. The goal
                of listing the core competences below is not to
                illustrate in what areas we can offer services. This
                below section will serve as a substiantiation on{' '}
                <strong>why</strong> we can offer the services that we
                offer. For example, we can also say something about
                crypto integration into conventional business
                processes. Or, strategy in terms of crypto adoption /
                integration. Perhaps also say something about our vast
                network spanning the areas below (academia, regulatory
                / professional bodies, investors)
              </p>
            </Row>
          </div>
        )}
      </Transition>
      <Transition in={true} appear={true} timeout={1000}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center text-center">
                  <h5>Finance & Investments</h5>
                </Row>
                <Row className="justify-content-center text-center">
                  <p className=" mb-3">
                    FinRep, Accounting, Deals, M&A
                  </p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>Governance, Risk & Compliance</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">
                    Risk, Controls, Internal Governance, Frameworks,
                    etc.
                  </p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>Research</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">Research and Academia</p>
                </Row>
              </Col>
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

export default Team;
