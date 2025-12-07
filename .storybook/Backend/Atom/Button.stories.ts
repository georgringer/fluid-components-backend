import {type Meta, type StoryObj, fetchComponent} from '@andersundsehr/storybook-typo3';

export default {
  component: await fetchComponent('fb:atom.button'),
} satisfies Meta;

export const Button: StoryObj = {
  args: {
    title: "Default Button",
  },
  argTypes: {
    class: {
      options: ['danger', 'info', 'Item Three'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
};

const baseArgs = {
  title: "With Icon + class",
};

const createButtonVariant = (
  className: string,
  icon: string
): StoryObj => ({
  args: {
    ...baseArgs,
    class: className,
    icon,
  },
});

export const Danger = createButtonVariant("danger", "actions-approve");
export const Info = createButtonVariant("info", "actions-check-circle");
export const Notice = createButtonVariant("notice", "actions-music");
