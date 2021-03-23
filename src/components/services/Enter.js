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
                  Perform due diligence on a crypto project, where we
                  will conduct an in-depth assessment of the project.
                  We are not only able to look at the product itself,
                  but also to perform a thorough assessment of it's
                  governance strategy, tokenenomics, wallet &
                  transaction analytics, and an analysis of it's
                  ecosystem.
                </li>
                <li className="li-circle">
                  Perform a risk assessment of decentralized products.
                  We can help you identify and assess the risks
                  associated with either investing in or using a
                  particular decentralized app / blockchain network.
                  We will perform a deepdive on the underlying
                  technology, the team and governance surrounding the
                  product, assess and interpret smart contract audit
                  reports, and help you understand the risks that are
                  involved in interacting with the applicable product.
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
          <h6>Market entry / strategy</h6>
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
                  Help you understand the cryto asset space and
                  introduce you to the different investment strategies
                  you might employ.
                </li>
                <li className="li-circle">
                  Provide a throrough analysis of the current crypto
                  space, it's ecosystem and the regulatory
                  developments that might impact the direction that
                  this space is heading.
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
