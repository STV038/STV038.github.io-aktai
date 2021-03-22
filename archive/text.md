      2014 marked our introduction to the world of
                  Bitcoin. The concept of having a digital currency -
                  absent of any physicial backing in the traditional
                  sense of currencies - and use that currency to buy
                  (physical) goods on the internet was mind boggling
                  and exciting at the same time. As with all things
                  that are exciting, we dove into the world of Bitcoin
                  and the broader crypto space and came to truly
                  appreciate it's potential for society and financial
                  systems.

    {/*  */}
                {/*  */}
                {/* CONSIDER DELETED FIRST 2 PARAGRAPHS? */}
                {/*  */}

                <p>
                  The recent rise of Decentralized Finance (DeFi)
                  protocols substantiates that potential. DeFi aims to
                  build a completely decentralized financial
                  infrastructure on blockchain networks, thereby
                  replacing centralized financial services that are
                  traditionally offered only by financial
                  institutions. With over $42B locked in DeFi
                  products, it is increasingly apparent that DeFi will
                  have a major impact on our current financial systems
                  and significantly increase efficiency, transparancy
                  and interoperability of financial services.
                </p>We believe that the rise of Decentralized Finance
                  has has DeFi demonstrates that decentralized
                  technologies are here to stay and that the products
                  that are being developed on these technologies will
                  completely change the way we think about (personal)
                  finance and transacting with eachother

                  ide societal
                  adoption. has yet to be adopted. To many it is
                  opaque, new, chaotic and challenging to operate
                  with. At the same time we understand that the
                  digital asset space is an emergent one and
                  understandably faced with a lack of regulation,
                  maturity and governance when compared to e.g.
                  traditional finance.

                   their operations By
                  leveraging our expertise and network we want to We
                  can help prepare org in that regard and offer
                  startups with these capabilities. Help them mature
                  and develop an (internal) organisational /
                  governmental structure that accomadates the needs of
                  traditional organisations. That acccomodates the
                  needs and concerns of regulatory bodies. That offers
                  a greater degree of comfort towards participants,
                  investors and regulators.



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
<h6>SOC / ISAE Assurance readiness</h6>
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
With decentralized technologies and crypto assets
growing exponentially, the need for proper governance,
risk management and maturity increases as well.
Regulators, users and investors will increasingly demand
some form of comfort that decentralized products are
properly developed and governed.
<ul>
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
