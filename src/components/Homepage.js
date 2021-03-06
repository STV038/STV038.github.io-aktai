import React from 'react';
import { Container, Row } from 'reactstrap';

const Homepage = () => {
  return (
    <div className="App bg-aktai">
      <Container>
        <Row className="justify-content-center aktai-title">
          <h1 className="header1 text-light mb-3">
            <span style={{ fontFamily: 'Anurati' }}>A</span>ktai
            <span
              style={{ marginLeft: '1rem', fontFamily: 'Anurati' }}
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
          <h6 className="text-light subtext">
            Contributing to the development and integration of
            decentralized technologies in society and current
            financial systems
          </h6>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
