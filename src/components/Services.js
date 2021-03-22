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

import {
  faSyncAlt,
  faDoorOpen,
} from '@fortawesome/free-solid-svg-icons';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Build from './services/Build';
import Enter from './services/Enter';

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

const Services = () => {
  const [openLegal, setOpenLegal] = useState(false);
  const toggleLegal = () => setOpenLegal(!openLegal);

  // developing decentralized technologies and products
  // active in crypto space
  // looking to operate or invest in decentralized technologies
  //

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
              <Col sm="10" md="10" lg="4">
                <p className="mb-3">
                  Whether you are already active in the crypto space,
                  looking to invest in it, or wanting to integrate
                  decentralized technologies into your organization;
                  we can help you navigate through the technological
                  and regulatory complexities.
                </p>
                {/* By leveraging our
                  expertise we can help you make your decentralized
                  journey strengthen your and add comfort to that
                  journey by leveraging our expertise and help you
                  grow (crypto) or onboard decentralized technologies
                  into your organization. */}
              </Col>
            </Row>
            <Row className="justify-content-around text-center services-row match-height pt-5">
              <Col sm="10" md="10" lg="3" xl="4" className="mb-5">
                <Card body>
                  <CardTitle>
                    <FontAwesomeIcon
                      icon={faEthereum}
                      size="7x"
                      id="icon"
                    />
                    <h4 className="pt-4 pb-4">
                      Build / Already active
                    </h4>
                    <p className="text-left">
                      The regulatory and technological landscape
                      surrounding crypto assets and blockchain is
                      ambigious, moving fast and still maturing.
                    </p>
                    <p className="text-left">
                      Operating in such a world comes with multiple
                      challenges, considering that future regulation
                      might impact your business or governance model
                      and that the space is still maturing. We can
                      help you face these challenges so that you:
                      <ul>
                        <li className="li-circle">
                          may comply with current and future
                          regulation
                        </li>
                        <li className="li-circle">
                          have robust risk management in place
                        </li>
                        <li className="li-circle">
                          are able to demonstrate the implementation
                          of best practices to regulatory bodies,
                          investors, users, clients, and auditors
                        </li>
                      </ul>
                      After all, mainstream adoption and integrating
                      decentralized technologies into existing
                      business processes requires a certain degree of
                      comfort and decentralized risk management. We
                      can help you mature, scale and develop an
                      effective control environment and governance
                      structure that accomadates the needs of society,
                      regulatory bodies and TradFi by offering the
                      following capabilities:
                    </p>
                  </CardTitle>
                  <CardText>
                    <Build />
                  </CardText>
                </Card>
              </Col>
              <Col sm="10" md="10" lg="3" xl="4" className="mb-5">
                <Card body>
                  <CardTitle>
                    <FontAwesomeIcon
                      icon={faDoorOpen}
                      size="7x"
                      id="icon"
                    />
                    <h4 className="pt-4 pb-4">Enter</h4>
                    <p className="text-left">
                      The current world of decentralized technologies
                      is very promising, but also complex and
                      difficult to fully grasp; using and operating on
                      these decentralized technologies requires
                      technological savyness and knowledge of the
                      risks involved. Making mistakes can be costly
                      and will be final.
                    </p>
                    <p className="text-left">
                      In addition to the technological complexities,
                      the crypto space is currently lacking proper
                      regulation and maturity; investors and
                      speculators are throwing capital at any crypto
                      asset for fear of missing out which in turn
                      makes it very appealing for startups to
                      overpromise and underdeliver.
                    </p>
                    <p className="text-left">
                      You need a navigator that does not only know how
                      to operate on these new infrastructures and has
                      experience in the crypto asset space, but is
                      also experienced in financial management,
                      information risk & security, regulation and
                      compliance.
                    </p>
                    <p className="text-left">
                      We can help you make sense of this new paradigm
                      and add comfort to your journey into the world
                      of decentralized tech by offering the following
                      services:
                    </p>
                  </CardTitle>
                  <CardText>
                    <Enter />
                  </CardText>
                </Card>
              </Col>
              <Col sm="10" md="10" lg="3" xl="4" className="mb-5">
                <Card body>
                  <CardTitle>
                    <FontAwesomeIcon
                      icon={faSyncAlt}
                      size="7x"
                      id="icon"
                    />
                    <h4 className="pt-4 pb-4">Integrate</h4>
                    <p>
                      We understand the risks arising from the
                      application and integration of decentalized
                      technologies into (existing) organizational
                      processes. From transacting on DeFi products. We
                      can leverage our expertise in helping companies
                      to identify, assess and address these risks. To
                      optimize the use of decentralized technologiesi
                      in your organization, whilst taking into account
                      the risks associated with these technologies and
                      design effective risk management measures.
                    </p>
                  </CardTitle>
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
