import { ThemeProvider } from './themeProvider';
import { makeDecorator } from '@storybook/addons';
import type { ReactElement } from 'react';
import React from 'react';

const withHeaderThemeProvider = makeDecorator({
  name: 'withHeaderThemeProvider',
  parameterName: 'headerTheme',
  wrapper: (storyFunction, context) => (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {storyFunction(context) as ReactElement}
    </ThemeProvider>
  ),
});

export default withHeaderThemeProvider;
