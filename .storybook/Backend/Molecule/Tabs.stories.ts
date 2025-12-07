import {type Meta, type StoryObj, fetchComponent} from '@andersundsehr/storybook-typo3';

export default {
  component: await fetchComponent('fb:molecule.tabs'),
} satisfies Meta;

export const Tab: StoryObj = {
  args: {
    slot____header: "This is an example"
  },
};

/*
Correct HTML would be:
------
<fb:molecule.tabs>
  <f:fragment name="header">
    <fb:atom.tabHeader
      id="one"
      active="1"
      header="Tab #1" />
    <fb:atom.tabHeader
      id="two"
      header="Tab #2" />
  </f:fragment>
  <f:fragment name="content">
    <fb:atom.tabContent
      id="one"
      active="1"
      content="Lorem ipsum" />
    <fb:atom.tabContent
      id="two"
      content="Content #2" />
  </f:fragment>
</fb:molecule.tabs>
 */
