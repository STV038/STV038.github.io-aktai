import * as React from 'react';
import { Row, Col, Card, CardText, CardTitle } from 'reactstrap';
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
            <Row className="mb-5">
              <hr className="new1" />
            </Row>
            <Row className="justify-content-center text-center">
              <Col sm="12" lg="4">
                <p className="mb-5">
                  Aktai Ventures consists of specialists with
                  extensive experience and capabilities in the fields
                  of finance, audit, (information) risk management and
                  regulatory compliance. We have serviced a broad
                  range of clients ranging from large financial
                  institutions and technology firms, to mid sized
                  companies that service local communities. With our
                  experience and network we want to contribute to the
                  robustness and maturity of the digital asset space
                  and help accelerate societal adoption of
                  decentralized technologies.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center match-height">
              <Col sm="12" lg="3" className="pt-3">
                <Card body>
                  <CardTitle tag="h5">Finance</CardTitle>
                  <CardText>
                    Several years of experience in the worlds of
                    finance, accounting & controlling and investments.
                    Performed a wide array of financial advisory &
                    (SOX / ICOFR) audit engagements for clients
                    operating in the financial services, technology
                    and corporate worlds. Deep understanding of
                    corporate finance, investment management and
                    accounting standards.
                  </CardText>
                </Card>
              </Col>
              <Col sm="12" md="12" lg="3" className="pt-3">
                <Card body>
                  <CardTitle tag="h5">IT Risk Management</CardTitle>
                  <CardText>
                    Veterans in IT risk management with a deep
                    understanding of internal controls, risks arising
                    from the development and use of (emerging)
                    technologies and (ISO, SOC & ISAE) assurance
                    standards. Several years of experience in the
                    design, implementation and assessment of IT
                    control environments and frameworks. Contributors
                    to professional associations in designing
                    blockchain & crypto audit approaches.
                  </CardText>
                </Card>
              </Col>
              <Col sm="12" lg="3" className="pt-3">
                <Card body>
                  <CardTitle tag="h5">Legal</CardTitle>
                  <CardText>
                    Comparative law, PhD research on contract law and
                    smart contracts, assistant lecturer University on
                    IT and Law, privacy proposition
                  </CardText>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Team;

// With a common passion and
//                   expertise in crypto assets, the team has Aktai
//                   Ventures consists of veterans from the Our team
//                   consists of veterans from the finance and venture
//                   capital worlds in Asia. Aktai Ventures consists of
//                   veterans in the space of finance, IT and Aktai
//                   Ventures consists of veterans in the space of
//                   Finance, IT Risk & Compliance and Regulation. The
//                   goal of listing the core competences below is not to
//                   illustrate in what areas we can offer services. This
//                   below section will serve as a substiantiation on{' '}
//                   <strong>why</strong> we can offer the services that
//                   we offer. For example, we can also say something
//                   about crypto integration into conventional business
//                   processes. Or, strategy in terms of crypto adoption
//                   / integration. Perhaps also say something about our
//                   vast network spanning the areas below (academia,
//                   regulatory / professional bodies, investors). Our
//                   team of specialists have extensive experience in the
//                   blockchain space and bring a wide range of skills
//                   including traditional finance, cyber security, data
//                   science, system development life cycles, development
//                   and process design to any project.
