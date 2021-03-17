import * as React from 'react';
import { useState } from 'react';
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Collapse,
} from 'reactstrap';
import { Transition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

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

//advisory.kpmg.us/services/risk-assurance/internal-audit-enterprise-risk.html
//advisory.kpmg.us/services/risk-assurance.html
//advisory.kpmg.us/services/technology/emerging-technology-risk.html
//advisory.kpmg.us/services/risk-assurance/it-audit-assurance.html

// <FontAwesomeIcon icon={faChessKnight} size="3x" id="icon" />;
const Services = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const toggle1 = () => setIsOpen1(!isOpen1);

  const [openLegal, setLegal] = useState(false);
  const toggleLegal = () => setLegal(!openLegal);

  const [openResearch, setResearch] = useState(false);
  const toggleResearch = () => setResearch(!openResearch);

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
                <span style={{ fontFamily: 'Anurati' }}>S</span>
                ervices
              </h1>
            </Row>
            <Row className="mb-5">
              <hr className="new1" />
            </Row>
            <Row className="justify-content-center text-center">
              <Col sm="12" lg="4">
                <p className="mb-3">
                  Whether you are already operating in the crypto
                  space or looking to step into that space (e.g.
                  governmental bodies, corporation, financial
                  institutions), we can add comfort to that journey by
                  leveraging our expertise and help you grow (crypto)
                  or onboard decentralized technologies into your
                  organization.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="pb-3">
                <Card body>
                  <CardTitle tag="h5">
                    Risk Management, Risk & Controls? Road to
                    assurance?
                  </CardTitle>

                  <CardText>
                    Business Process, integration, etc. Control
                    frameworks etc. Perhaps make a caroussel and focus
                    on a couple of major topics. For instance 1
                    caroussel has three columns. the first page is
                    "Governance, Risk and Compliance ". This includes
                    a couple of columns. For instance risk management,
                    readiness assessments towards (assurance).
                  </CardText>
                </Card>
              </Col>
              <Col sm="12" lg="4">
                <Card body>
                  <CardTitle tag="h5">
                    Financial Reporting & Tokeneconomics
                  </CardTitle>
                  <CardText>
                    Some stuff about auditing, financial reporting,
                    financials, etc.
                  </CardText>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="pb-3">
                <Card body className="match-height">
                  <CardTitle
                    onClick={toggle1}
                    tag="h5"
                    className="expand-card"
                  >
                    <div>Assessments & Due Diligence</div>
                    <FontAwesomeIcon icon={faChevronDown} id="icon" />
                  </CardTitle>
                  <Collapse isOpen={isOpen1}>
                    <CardText>
                      Risk, Maturity assessments. (DeFi) Product
                      assessments. Take PAID network as example. We
                      can help in identifying key risks arising from
                      the use of your product and assess to what
                      extent these risks are addressed. Key
                      management, etc. etc. Technology Risk Management
                      professionals take a broader, more holistic view
                      of the risk element. We concentrate on the
                      strategic impact that technologies and new
                      business models can have on your entire
                      organization. We help you establish a governance
                      framework that embraces disruptive technologies
                      and encourages innovation while ensuring risks
                      are identified and managed
                    </CardText>
                  </Collapse>
                </Card>
              </Col>
              <Col sm="12" lg="4" className="pb-3">
                <Card body>
                  <CardTitle
                    tag="h5"
                    onClick={toggleLegal}
                    className="expand-card"
                  >
                    <div>Regulation</div>
                    <FontAwesomeIcon icon={faChevronDown} id="icon" />
                  </CardTitle>
                  <Collapse isOpen={openLegal}>
                    <CardText>
                      The regulatory and technological landscape
                      surrounding crypto assets and blockchain is
                      ambigious, moving fast and still maturing.
                      Governments are struggling to interpret the
                      implications of this space, which means that
                      regulations surrounding the use of decentralized
                      technologies is still developing. Operating in
                      such a world comes with multiple challenges, as
                      future regulation might impact your business or
                      governance model. We can help you face these
                      challenges so that you may comply with current
                      and future regulations and demonstrate the
                      implementation of best practices to regulatory
                      bodies, investors and clients. We can help you
                      with the following topics:
                      <ul>
                        {/* hier moet je classname li-circle aantoeveogen! */}
                        <li>
                          Streamlining a business plan in light of the
                          relevant legal frameworks
                        </li>
                        <li>
                          Preemptively identifying legal risks and
                          help you address these
                        </li>
                        <li>
                          Design and implement best practices to meet
                          regulatory compliance.
                        </li>
                      </ul>
                    </CardText>
                  </Collapse>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="pb-3">
                <Card body>
                  <CardTitle
                    onClick={toggleResearch}
                    tag="h5"
                    className="expand-card"
                  >
                    <div>Research</div>
                    <FontAwesomeIcon icon={faChevronDown} id="icon" />
                  </CardTitle>
                  <Collapse isOpen={openResearch}>
                    <CardText>
                      PhD research on smart contracts and comparative
                      contract law. Research on Information Risk
                      Management approaches for multi-party consensus
                      machines.
                    </CardText>
                  </Collapse>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="12" lg="4" className="pb-3">
                <Card body>
                  <CardTitle
                    onClick={toggleResearch}
                    tag="h5"
                    className="expand-card"
                  >
                    <div>
                      Looking to step into the world of digital assets
                      and decentralized technologies
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} id="icon" />
                  </CardTitle>
                  <Collapse isOpen={openResearch}>
                    <CardText>
                      The current world of decentralized technologies
                      is very promising, but also opaque, new, chaotic
                      and challenging to operate with. Many new
                      blockchain networks are developed and released
                      to the world, some very promising that are
                      geared towards the estbalish of a new financial
                      infrastructure. But navigating across these
                      blockchains requires technological savyness and
                      knowledge of the risks involved. Making mistakes
                      can be costly and will be final. You need a
                      navigator that does not only know how to operate
                      on these new infrastructures and has experience
                      in the crypto asset space, but is also familiar
                      with topics surrounding financial management,
                      risk management, regulation and compliance.
                    </CardText>
                  </Collapse>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Services;
