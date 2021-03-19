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

  return (
    <React.Fragment>
      <div className="pt-3 pb-5">
        <div
          onClick={toggleBuild1}
          className="services-collapse justify-content-between"
        >
          <h6>Assurance readiness</h6>
          {openBuild1 === true ? (
            <div className="services-collapse">
              <p className="h-50">
                <small>collapse</small>
              </p>
              <FontAwesomeIcon
                icon={faChevronUp}
                id="icon"
                className="ml-5 mr-3 h-50 collapse-expand"
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
                className="ml-5 mr-3 h-50 collapse-expand"
              />
            </div>
          )}
        </div>
        <Collapse isOpen={openBuild1}>
          <div>
            <p className="text-left">
              The regulatory and technological landscape surrounding
              crypto assets and blockchain is ambigious, moving fast
              and still maturing.
              <ul>
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
      <div>
        <div
          onClick={toggleBuild2}
          className="services-collapse justify-content-between"
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
                className="ml-5 mr-3 h-50 collapse-expand"
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
                className="ml-5 mr-3 h-50 collapse-expand"
              />
            </div>
          )}
        </div>
        <Collapse isOpen={openBuild2}>
          <div>
            <p className="text-left">
              The regulatory and technological landscape surrounding
              crypto assets and blockchain is ambigious, moving fast
              and still maturing. Operating in such a world comes with
              multiple challenges, as future regulation might impact
              your business or governance model. We can help you face
              these challenges so that you may comply with current and
              future regulations and demonstrate the implementation of
              best practices to regulatory bodies, investors and
              clients. We can help you with the following topics:
              <ul>
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
