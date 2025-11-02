// sitecore/definitions/templates/PageTemplate.sitecore.ts
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function (manifest: Manifest): void {
  manifest.addTemplate({
    name: 'Page Template',
    displayName: 'Page Template',
    fields: [
      { name: 'pageTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'pageDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'metaTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'metaDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'metaKeywords', type: CommonFieldTypes.SingleLineText },
      { name: 'ogImage', type: CommonFieldTypes.Image },
      { name: 'heroImage', type: CommonFieldTypes.Image },
      { name: 'content', type: CommonFieldTypes.RichText },
      { name: 'showInNavigation', type: CommonFieldTypes.Checkbox },
      { name: 'navigationTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'hidePageTitle', type: CommonFieldTypes.Checkbox },
    ],
  });
}
