import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

// import "./index.css";
import "../css/styles.css";

const Header = () =>
  <div>
    <button className="nav nav__btn" type="button">
      <span className="bar" />
    </button>

    <nav>
      <ul>
        <li>
          <h5 className="nav__subtitle">Back</h5>
          <a href="/">Home</a>
        </li>

        <li>
          <h5 className="nav__subtitle">Sumpin&rsquo; Sumpin&rsquo;</h5>
          <a href="/about/">About</a>
        </li>

        <li>
          <h5 className="nav__subtitle">Selected</h5>
          <a class="work" href="/#work">
            Work
          </a>
        </li>

        <li>
          <h5 className="nav__subtitle">Work in Progress</h5>
          <a href="http://dribbble.com/raleighfelton" target="blank">
            Dribbble
          </a>
        </li>

        <li>
          <h5 className="nav__subtitle">My Thoughts</h5>
          <a href="https://medium.com/@raleighfelton" target="blank">
            Writing
          </a>
        </li>
      </ul>
    </nav>
  </div>;

const FooterLinks = [
  {
    name: "Twitters",
    link: "https://twitter.com/raleighfelton"
  },
  {
    name: "Dribble",
    link: "https://dribbble.com/raleighfelton"
  },
  {
    name: "Medium",
    link: "https://medium.com/@raleighfelton"
  },
  {
    name: "Instagram",
    link: "https://instagram.com/raleighfelton"
  },
  {
    name: "Vimeo",
    link: "https://vimeo.com/raleighfelton"
  },
  {
    name: "Github",
    link: "https://github.com/raleighfelton"
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/raleighfelton/"
  }
];

const Footer = () =>
  <div>
    <footer className="c-footer">
      <div className="c-footer__container">
        <div className="c-footer__content">
          <div
            className="c-footer__logo"
            style={{
              height: 56,
              width: 56
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 46">
              <path
                fill-rule="evenodd"
                d="M64.9354974,70.5805383 C64.4314159,70.5751298 63.8702334,70.5525926 63.2562833,70.5525926 C60.7443916,70.5525926 59.002017,69.1638187 59.002017,66.54955 C59.002017,63.5268581 61.0685283,60.5858057 61.0685283,57.4814744 C61.0685283,55.3164485 59.528823,54.2952779 57.341068,54.2952779 L52.6816866,54.2952779 L48.5893768,68.6327108 C48.4274203,69.2454583 48.4679094,69.3270978 49.0756937,69.3270978 L52.1143915,69.3270978 C52.276348,69.3270978 52.3575499,69.3679175 52.3575499,69.6947011 C52.3575499,70.0217103 52.276348,70.0623045 52.1143915,70.0623045 L40.2430242,70.0623045 C40.080844,70.0623045 40.0000895,70.0217103 40.0000895,69.6947011 C40.0000895,69.3679175 40.080844,69.3270978 40.2430242,69.3270978 L43.1197655,69.3270978 C43.7275498,69.3270978 43.8490172,69.2454583 44.0109737,68.6327108 L51.7497656,41.4693037 C51.9117221,40.8565563 51.8307439,40.7749168 51.2229596,40.7749168 L48.6298659,40.7749168 C48.4679094,40.7749168 48.3869311,40.734097 48.3869311,40.4073134 C48.3869311,40.0805298 48.4679094,40.03971 48.6298659,40.03971 L59.8934488,40.03971 C64.9579451,40.03971 68.118334,42.6539788 68.118334,45.8807695 C68.118334,49.8838121 64.4718519,52.3753961 59.6910032,53.6417107 L59.6910032,53.8052153 C63.1348159,54.9080253 65.322571,56.337619 65.322571,59.5238154 C65.322571,62.3830028 63.4184635,65.610019 63.4184635,68.0607832 C63.4184635,68.8370351 63.7021111,69.7569456 64.5528302,69.7569456 C64.760108,69.7569456 64.9629956,69.7736505 65.1599685,69.7926147 L68.7033907,57.3547301 C68.8655709,56.7419827 68.8250818,56.6603432 68.2172975,56.6603432 L65.6244275,56.6603432 C65.4622473,56.6603432 65.381269,56.6192979 65.381269,56.2925143 C65.381269,55.9657307 65.4622473,55.9249109 65.6244275,55.9249109 L87.3814051,55.9249109 C87.9487003,55.9249109 87.9891894,56.1292353 87.8272329,56.7011629 L85.5582759,64.7070227 C85.5177868,64.9113471 85.2746284,65.0338063 85.1126719,65.0338063 C84.9100025,65.0338063 84.8290243,64.9113471 84.8290243,64.7070227 C84.8290243,58.1715764 83.3705209,56.6603432 79.1162546,56.6603432 L74.1732256,56.6603432 C73.5654413,56.6603432 73.443974,56.7419827 73.2817938,57.3547301 L69.7162899,69.813101 L72.0662252,69.813101 C75.8343983,69.813101 77.3741036,68.6694712 79.2784348,65.1973109 C79.359413,65.0338063 79.5213695,64.9113471 79.7240388,64.9113471 C79.8859954,64.9113471 80.0481756,64.9929866 80.0074627,65.1973109 L77.0092541,75.7766197 C76.9282758,75.980944 76.8068085,76.1034033 76.56365,76.1034033 C76.3612044,76.1034033 76.2800024,75.980944 76.2800024,75.7766197 C76.3204915,71.8962618 75.6722181,70.5483077 71.9042687,70.5483077 L69.5138443,70.5483077 L65.5432255,84.5181372 C65.381269,85.1308847 65.4215344,85.2125242 66.0293187,85.2125242 L69.6760245,85.2125242 C69.8377573,85.2125242 69.9189593,85.253344 69.9189593,85.5801276 C69.9189593,85.9069111 69.8377573,85.9477309 69.6760245,85.9477309 L57.2778512,85.9477309 C57.115671,85.9477309 57.0346928,85.9069111 57.0346928,85.5801276 C57.0346928,85.253344 57.115671,85.2125242 57.2778512,85.2125242 L60.0736143,85.2125242 C60.6811749,85.2125242 60.8028659,85.1308847 60.9648224,84.5181372 L64.9354974,70.5805383 Z M60.2175855,40.7749168 L57.1788878,40.7749168 C56.5711035,40.7749168 56.4901252,40.8565563 56.327945,41.4693037 L52.8841323,53.5600712 L56.5711035,53.5600712 C58.5159237,53.5600712 59.8124706,52.906504 60.9468372,51.7628742 C62.6487227,50.0473167 63.7830894,46.738661 63.7830894,44.0427527 C63.7830894,41.9185466 62.4865425,40.7749168 60.2175855,40.7749168 Z"
                transform="translate(-40 -40)"
              />
            </svg>
          </div>

          <h2 className="c-footer__title">Contact</h2>
          <a
            className="c-footer__mail"
            href="mailto:raleighfelton@gmail.com?Subject=What%20It%20Do"
            target="_top"
          >
            raleighfelton at gmail.com
          </a>

          <ul className="c-footer__elsewhere">
            {FooterLinks.map(link =>
              <li>
                <a target="_blank" rel="nofollow" href={link.link}>
                  {link.name}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  </div>;

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Raleigh Felton // Designer"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>

    <Footer />
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
