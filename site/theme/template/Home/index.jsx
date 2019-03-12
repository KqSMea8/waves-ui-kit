import React from 'react';
import { injectIntl } from 'react-intl';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';

// To store style which is only for Home and has conflicts with others.
function getStyle() {
  return `
    .page-wrapper {
    height: 100%;
    }
    .main-wrapper {
      padding: 0;
    }
    footer .footer-wrap {
      width: 100%;
      padding: 0;
    }
    footer .footer-wrap .ant-row {
      width: 100%;
      max-width: 1200px;
      padding: 86px 24px 93px 24px;
      margin: auto;
    }
    @media only screen and (max-width: 767.99px) {
      #footer .footer-wrap{
        padding: 40px 24px
      }
      footer .footer-wrap .ant-row {
        padding: 0;
      }
    }
    header {
      display: none;
    }
  `;
}

/* eslint-disable react/prefer-stateless-function */
class Home extends React.Component {
  static contextTypes = {
    intl: PropTypes.object.isRequired,
    isMobile: PropTypes.bool.isRequired,
  };

  render() {
    const { isMobile, intl } = this.context;
    const childProps = { ...this.props, isMobile, locale: intl.locale };
    return (
      <DocumentTitle title={`Ant Design - ${intl.formatMessage({ id: 'app.home.slogan' })}`}>

        <div className="homePage">


          <div className="homeWrapper">

            <div className="left"></div>
            <div className="right">
              <div className="logo-wrp">
                <div className="logo"><img src="https://svgur.com/i/Bey.svg" alt="" /></div>
              </div>
              <div className="cont-wrp">
                <div className="center">
                  <h1>Welcome to Waves Ui Kit</h1>
                  <p>Waves Ui Kit - is an updated vision of Ant design in the corporate style Waves. A design system with values of Nature and Determinacy for better user experience of enterprise applications.</p>
                  <a className="ant-btn ant-btn-primary ant-btn-lg" href="/components/button/">Getting Started</a>
                </div>
              </div>
              <div className="footer-wrp"><a href="#">Ant Design Documentation</a></div>

            </div>

          </div>

        </div>


      </DocumentTitle>
    );
  }
}

export default injectIntl(Home);
