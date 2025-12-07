import {type Meta, type StoryObj, fetchComponent} from '@andersundsehr/storybook-typo3';

export default {
  component: await fetchComponent('fb:atom.badge'),
} satisfies Meta;

export const Badge: StoryObj = {
  args: {
    content: "Example",
  }
};
export const BadgeAsPill: StoryObj = {
  args: {
    content: "Example Pill",
    pill: true,
  }
};

const baseArgs = {
  content: "Example with class",
};

const createBadge = (
  className: string,
): StoryObj => ({
  args: {
    ...baseArgs,
    class: className
  },
});

export const BadeInfo = createBadge('info');
export const BadgePrimary = createBadge('primary');
export const BadgeSecondary = createBadge('secondary');
export const BadgeInfo = createBadge('info');
export const BadgeSuccess = createBadge('success');
export const BadgeWarning = createBadge('warning');
export const BadgeDanger = createBadge('danger');
export const BadgeNotice = createBadge('notice');
