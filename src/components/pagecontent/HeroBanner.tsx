import { JSX } from 'react';
import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeroBannerProps = ComponentProps & {
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
const HeroBanner = ({ fields }: HeroBannerProps): JSX.Element => (
  <section className="hero-banner">
    <div className="hero-content">
      <h1>Welcome to SiteB</h1>
      <p>Your trusted partner for digital innovation.</p>
      <a href="/services" className="cta-button">Explore Services</a>
    </div>
    <div className="hero-image">
      <img src="/images/hero-siteb.jpg" alt="Digital innovation visual" />
    </div>
  </section>
);

export default withDatasourceCheck()<HeroBannerProps>(HeroBanner);
