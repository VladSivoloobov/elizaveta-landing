import { createTV } from 'tailwind-variants';

export const tv = createTV({
  twMergeConfig: {
    classGroups: {
      py: ['py-section', 'py-container'],
      my: ['my-section', 'my-container'],
    },
  },
});
