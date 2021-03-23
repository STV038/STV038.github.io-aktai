import React, { useState } from 'react';

import { Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const Build = () => {
  const [openBuild1, setOpenBuild1] = useState(false);
  const toggleBuild1 = () => setOpenBuild1(!openBuild1);

  const [openBuild2, setOpenBuild2] = useState(false);
  const toggleBuild2 = () => setOpenBuild2(!openBuild2);

  const [openBuild3, setOpenBuild3] = useState(false);
  const toggleBuild3 = () => setOpenBuild3(!openBuild3);

  return (
    <React.Fragment>
      <div className="pt-3 pb-5">
        <div
          onClick={toggleBuild3}
          className="services-collapse justify-content-between service-titles"
        >
          <h6>Governance & Information Risk Management</h6>
          {openBuild3 === true ? (
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
        <Collapse isOpen={openBuild3}>
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
          onClick={toggleBuild1}
          className="services-collapse justify-content-between service-titles"
        >
          <h6>SOC / ISAE Assurance / ISO readiness</h6>
          {openBuild1 === true ? (
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
        <Collapse isOpen={openBuild1}>
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
              </ul>
            </p>
          </div>
        </Collapse>
      </div>
      <div className="pb-5">
        <div
          onClick={toggleBuild2}
          className="services-collapse justify-content-between service-titles"
        >
          <h6>Regulatory compliance</h6>
          {openBuild2 === true ? (
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
        <Collapse isOpen={openBuild2}>
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
      </div>
    </React.Fragment>
  );
};

export default Build;
