import { JSX } from 'react';
import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FooterProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Footer = ({ fields }: FooterProps): JSX.Element => (
  <footer>
    <div className="footer-content">
      <div className="footer-logo">
        <a href="/">
          <img src="/images/logo-footer.svg" alt="SiteB Logo" />
        </a>
      </div>

      <nav className="footer-navigation" aria-label="Footer menu">
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>

      <div className="footer-social">
        <a href="https://twitter.com/siteb" aria-label="Twitter">
          <img src="/images/icon-twitter.svg" alt="Twitter" />
        </a>
        <a href="https://linkedin.com/company/siteb" aria-label="LinkedIn">
          <img src="/images/icon-linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2025 SiteB. All rights reserved.</p>
    </div>
  </footer>
);

export default withDatasourceCheck()<FooterProps>(Footer);
