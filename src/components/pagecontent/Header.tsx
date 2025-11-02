import { JSX } from 'react';
import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderProps = ComponentProps & {
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
const Header = ({ fields }: HeaderProps): JSX.Element => (
  <header className="contentBlock">
    <div className="site-branding">
      <a href="/" className="logo">
        <img src="/images/logo.svg" alt="SiteB Logo" />
      </a>
      <h1 className="site-title">SiteB</h1>
    </div>

    <nav className="main-navigation" aria-label="Main menu">
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>

    <div className="header-actions">
      <form action="/search" method="get" className="search-form">
        <input type="text" name="q" placeholder="Search..." />
        <button type="submit">🔍</button>
      </form>
    </div>
  </header>
);

export default withDatasourceCheck()<HeaderProps>(Header);
