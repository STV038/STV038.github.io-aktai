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
                Finance, IT Risk & Compliance and Regulation.
              </p>
            </Row>
          </div>
        )}
      </Transition>
      <Transition in={true} appear={true} timeout={2000}>
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
                  <h5>Finance</h5>
                </Row>
                <Row className="justify-content-center text-center">
                  <p className=" mb-3">Finance experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>IT Risk</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">IT Risk experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>Regulation & Compliance</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">Regulatory stuff</p>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center text-center">
                  <h5>Finance</h5>
                </Row>
                <Row className="justify-content-center text-center">
                  <p className=" mb-3">Finance experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>IT Risk</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">IT Risk experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>Regulation & Compliance</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">Regulatory stuff</p>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center text-center">
                  <h5>Finance</h5>
                </Row>
                <Row className="justify-content-center text-center">
                  <p className=" mb-3">Finance experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>IT Risk</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">IT Risk experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>Regulation & Compliance</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">Regulatory stuff</p>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center text-center">
                  <h5>Finance</h5>
                </Row>
                <Row className="justify-content-center text-center">
                  <p className=" mb-3">Finance experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>IT Risk</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">IT Risk experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>Regulation & Compliance</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">Regulatory stuff</p>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center text-center">
                  <h5>Finance</h5>
                </Row>
                <Row className="justify-content-center text-center">
                  <p className=" mb-3">Finance experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>IT Risk</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">IT Risk experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>Regulation & Compliance</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">Regulatory stuff</p>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center text-center">
                  <h5>Finance</h5>
                </Row>
                <Row className="justify-content-center text-center">
                  <p className=" mb-3">Finance experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>IT Risk</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">IT Risk experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>Regulation & Compliance</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">Regulatory stuff</p>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center text-center">
                  <h5>Finance</h5>
                </Row>
                <Row className="justify-content-center text-center">
                  <p className=" mb-3">Finance experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>IT Risk</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">IT Risk experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>Regulation & Compliance</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">Regulatory stuff</p>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center text-center">
                  <h5>Finance</h5>
                </Row>
                <Row className="justify-content-center text-center">
                  <p className=" mb-3">Finance experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>IT Risk</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">IT Risk experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>Regulation & Compliance</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">Regulatory stuff</p>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center text-center">
                  <h5>Finance</h5>
                </Row>
                <Row className="justify-content-center text-center">
                  <p className=" mb-3">Finance experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>IT Risk</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">IT Risk experience</p>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="mt-5">
                <Row className="justify-content-center">
                  <h5>Regulation & Compliance</h5>
                </Row>
                <Row className="justify-content-center">
                  <p className=" mb-3">Regulatory stuff</p>
                </Row>
              </Col>
            </Row>
          </div>
        )}
      </Transition>
      <nav class="navbar fixed-bottom particle-footer">
        <ParticlesFooter />
      </nav>
    </div>
  );
};

export default Team;
