import React, { useState } from 'react';

import { Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const Enter = () => {
  const [openEnter1, setOpenEnter1] = useState(false);
  const toggleEnter1 = () => setOpenEnter1(!openEnter1);

  const [openEnter2, setOpenEnter2] = useState(false);
  const toggleEnter2 = () => setOpenEnter2(!openEnter2);

  const [openEnter3, setOpenEnter3] = useState(false);
  const toggleEnter3 = () => setOpenEnter3(!openEnter3);

  return (
    <React.Fragment>
      <div className="pt-3 pb-5">
        <div
          onClick={toggleEnter3}
          className="services-collapse justify-content-between service-titles"
        >
          <h6>Due Diligence</h6>
          {openEnter3 === true ? (
            <div className="services-collapse">
              <p className="h-50">
                <small>collapse</small>
              </p>
              <FontAwesomeIcon
                icon={faChevronUp}
                id="icon"
                className="ml-3 mr-3 h-50 collapse-expand"
              />{' '}
            </div>
          ) : (
            <div className="services-collapse">
              <p>
                <small>expand</small>
              </p>
              <FontAwesomeIcon
                icon={faChevronDown}
                id="icon"
                className="ml-3 mr-3 h-50 collapse-expand"
              />
            </div>
          )}
        </div>
        <Collapse isOpen={openEnter3}>
          <div>
            <p className="text-left">
              <ul className="services-list">
                <li className="li-circle">
                  Based on your product features, design, architecture
                  and governance, identify and assess the key risks
                  that are relevant for your customers and other
                  stakeholders (e.g. investors or regulators)
                </li>
                <li className="li-circle">
                  Define and implement GRC processes and control
                  objectives to mitigate the risks associated with
                  your product
                </li>
                <li className="li-circle">
                  Review of your governance model, security and
                  controls in place
                </li>
              </ul>
            </p>
          </div>
        </Collapse>
      </div>
      <div className="pb-5">
        <div
          onClick={toggleEnter1}
          className="services-collapse justify-content-between service-titles"
        >
          <h6>Risk assessment</h6>
          {openEnter1 === true ? (
            <div className="services-collapse">
              <p className="h-50">
                <small>collapse</small>
              </p>
              <FontAwesomeIcon
                icon={faChevronUp}
                id="icon"
                className="ml-3 mr-3 h-50 collapse-expand"
              />{' '}
            </div>
          ) : (
            <div className="services-collapse">
              <p>
                <small>expand</small>
              </p>
              <FontAwesomeIcon
                icon={faChevronDown}
                id="icon"
                className="ml-3 mr-3 h-50 collapse-expand"
              />
            </div>
          )}
        </div>
        <Collapse isOpen={openEnter1}>
          <div>
            <p className="text-left">
              <ul className="services-list">
                <li className="li-circle">
                  Risk assessment: focus on the identification,
                  assessment and management of the risks that are
                  relevant for you and your stakeholders (i.e. the
                  users of your assurance report / certification).
                </li>
                <li className="li-circle">
                  Readiness of attestation: based on the type of
                  attestation (e.g. ISO27001, SOC2, ISAE3000), perform
                  a review of your risk and control framework and help
                  draft of system description.
                </li>
                <li className="li-circle">
                  Design and implement best practices to meet
                  regulatory compliance.
                </li>
              </ul>
            </p>
          </div>
        </Collapse>
      </div>
      {/* <div className="pb-5">
        <div
          onClick={toggleEnter2}
          className="services-collapse justify-content-between service-titles"
        >
          <h6>Regulatory compliance</h6>
          {openEnter2 === true ? (
            <div className="services-collapse">
              <p className="h-50">
                <small>collapse</small>
              </p>
              <FontAwesomeIcon
                icon={faChevronUp}
                id="icon"
                className="ml-3 mr-3 h-50 collapse-expand"
              />{' '}
            </div>
          ) : (
            <div className="services-collapse">
              <p>
                <small>expand</small>
              </p>
              <FontAwesomeIcon
                icon={faChevronDown}
                id="icon"
                className="ml-3 mr-3 h-50 collapse-expand"
              />
            </div>
          )}
        </div>
        <Collapse isOpen={openEnter2}>
          <div>
            <p className="text-left">
              <ul className="services-list">
                <li className="li-circle">
                  Design and implement KYC / CDD processes
                </li>
                <li className="li-circle">
                  Identifying legal risks and help you address these
                </li>
                <li className="li-circle">
                  Identify and help obtain regulatory licences
                </li>
                <li className="li-circle">
                  Design and implement best practices to meet
                  regulatory compliance.
                </li>
              </ul>
            </p>
          </div>
        </Collapse>
      </div> */}
    </React.Fragment>
  );
};

export default Enter;
