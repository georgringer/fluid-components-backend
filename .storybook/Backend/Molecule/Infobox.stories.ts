import {type Meta, type StoryObj, fetchComponent} from '@andersundsehr/storybook-typo3';

export default {
  component: await fetchComponent('fb:molecule.infobox'),
} satisfies Meta;


const baseArgs = {
  title: 'Infobox',
  slot____default: 'With some content, With some content, With some content, With some content, With some content, With some content, With some content, ',
};

const createInfobox = (
  state: number
): StoryObj => ({
  args: {
    ...baseArgs,
    state: state
  },
});

export const WithStateOk = createInfobox(0);
export const WithStateWarning = createInfobox(1);
export const WithStateError = createInfobox(2);
export const WithStateNotice = createInfobox(-2);
export const WithStateInfo = createInfobox(-1);


export const NoIcon: StoryObj = {
  args: {
    title: 'No Icon',
    slot____default: "This is the content",
    disableIcon: true,
  },
};
export const CustomIcon: StoryObj = {
  args: {
    title: 'Custom Icon',
    icon: 'actions-brand-typo3',
  },
};
