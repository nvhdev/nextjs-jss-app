// eslint-disable-next-line no-unused-vars
import {  SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the ContentBlock component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function Main (manifest: Manifest): void {
  manifest.addComponent({
    name: 'Main',
    templateName: 'Main',
    // totally optional, but fun
    icon: SitecoreIcon.DocumentTag
  });
}
