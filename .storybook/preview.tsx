import type { Preview } from '@storybook/react';
import '../app/globals.css';
import { withHeaderThemeProvider } from '../providers';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    withHeaderThemeProvider,
    (Story) => {
      return <Story />;
    },
  ],
};

export default preview;
