import {type Meta, type StoryObj, fetchComponent} from '@andersundsehr/storybook-typo3';

export default {
  component: await fetchComponent('fb:molecule.panel'),
} satisfies Meta;

export const Hero: StoryObj = {
  args: {
    title: 'My panel',
    slot____default: 'With some content, With some content, With some content, With some content, With some content, With some content, With some content, ',
  },
};


const baseArgs = {
  title: 'With Color',
  slot____default: 'With some content, With some content, With some content, With some content, With some content, With some content, With some content, ',

};

const createPanel = (
  className: string
): StoryObj => ({
  args: {
    ...baseArgs,
    class: className
  },
});

export const WithColorDanger = createPanel('danger');
export const WithColorInfo = createPanel('info');
export const WithColorNotice = createPanel('notice');


const allVariantsDecorator = (Story, context) => {
  const variants = ['danger', 'info', 'notice'];

  return {
    render: () => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'grid';
      wrapper.style.gap = '2rem';
      wrapper.style.padding = '2rem';

      variants.forEach((variant) => {
        const block = document.createElement('div');

        const title = document.createElement('h3');
        title.textContent = variant;
        title.style.marginBottom = '0.5rem';

        const story = Story({
          ...context,
          args: {
            ...context.args,
            class: variant,
          },
        });

        block.appendChild(title);
        block.appendChild(story);
        wrapper.appendChild(block);
      });

      return wrapper;
    },
  };
};

export const AllVariants: StoryObj = {
  args: {
    ...baseArgs,
  },
  decorators: [allVariantsDecorator],
};
