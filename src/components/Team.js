import * as React from 'react';
import { Row, Col, Card, CardTitle, CardText } from 'reactstrap';
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
                <p className="mb-3">
                  Aktai Ventures consists of experienced specialists
                  from the finance, (technology) risk management and
                  legal worlds in Europe.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center text-center match-height">
              <Col sm="12" lg="3" className="pt-3 pb-3">
                <Card body>
                  <CardTitle tag="h5">
                    Finance & Investments
                  </CardTitle>
                  <CardText>
                    FinRep, Accounting, Deals, M&A. Dutch CPA
                    equivalent. Asset management.
                  </CardText>
                </Card>
              </Col>
              <Col sm="12" lg="3" className="pt-3 pb-3">
                <Card body>
                  <CardTitle tag="h5">Risk Management</CardTitle>
                  <CardText>
                    Governance, Risk and Compliance, SOX, Assurance
                    reporting (SOC1/2, ISAE300/3402), IT auditing,
                    Risk, Controls, Internal Governance, Frameworks,
                    etc. Supported the professional association for IT
                    auditors in designing blockchain & crypto audit
                    approaches and lead of big 4 blockchain & crypto
                    audit proposition.
                  </CardText>
                </Card>
              </Col>
              <Col sm="12" lg="3" className="pt-3 pb-3">
                <Card body>
                  <CardTitle tag="h5">Legal</CardTitle>
                  <CardText>
                    Privacy, Contract law, PhD research, assistant
                    lecturer University on IT and Law.
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
