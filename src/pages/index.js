import React from "react";
import Link from "gatsby-link";

import CrntThumb from "../assets/img/crnt/crnt-thumb.jpg";
import React2Thumb from "../assets/img/react2/react2-thumb.jpg";
import IamnowThumb from "../assets/img/iamnow/iamnow-thumb.jpg";
import SubstrateThumb from "../assets/img/substrate/substrate-thumb.png";
import ThrowThumb from "../assets/img/throw/throw-thumb.jpg";

const IndexPage = () =>
  <div>
    <div className="c-wrapper">
      <div className="c-home-header">
        <div className="c-home-header__title">
          <h1>Raleigh</h1>
          <h1>Felton</h1>
          <h3>Designer</h3>
        </div>
      </div>

      <div id="work" class="c-wrapper__container">
        <div className="c-portfolio">
          {/* {ProjectLinks.map(link =>
            <img href={link.link}>
              {link.name}
            </img>
          )} */}

          {/* Project CRNT */}
          <div className="c-portfolio__project c-portfolio__link hide">
            <a href="views/crnt.html" />
            <img src={CrntThumb} alt="CRNT" />
          </div>
          {/* Project: react2 */}
          <div className="c-portfolio__project c-portfolio__link hide">
            <a href="views/react2.html" />
            <img src={React2Thumb} alt="React2" />
          </div>
          {/* Project I AM NOW */}
          <div className="c-portfolio__project c-portfolio__link hide">
            <a href="views/i-am-now.html" />
            <img src={IamnowThumb} alt="I AM NOW" />
            {/* Project Substrate */}
            <div className="c-portfolio__project c-portfolio__link hide">
              <a href="views/substrate.html" />
              <img src={SubstrateThumb} alt="Substrate" />
            </div>
            {/* Project: throw */}
            <div className="c-portfolio__project c-portfolio__link hide">
              <a href="views/throw.html" />
              <img src={ThrowThumb} alt="Throw App" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default IndexPage;
