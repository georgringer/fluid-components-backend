import {type Meta, type StoryObj, fetchComponent} from '@andersundsehr/storybook-typo3';

export default {
  component: await fetchComponent('fb:molecule.card'),
} satisfies Meta;

export const Hero: StoryObj = {
  args: {
    title: "With Icon",
    slot____default: "With some content, With some content, With some content, With some content, With some content, With some content, With some content, ",
  },
};

