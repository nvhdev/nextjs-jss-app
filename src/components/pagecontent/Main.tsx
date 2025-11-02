import { JSX } from 'react';
import { withDatasourceCheck, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import {  ComponentRendering } from '@sitecore-jss/sitecore-jss-react';

type MainProps = {
  rendering: ComponentRendering;
};


/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Main = (props : MainProps): JSX.Element => (
  <main>
    <Placeholder name="main-content" rendering={props.rendering} />
  </main>
);

export default Main;
