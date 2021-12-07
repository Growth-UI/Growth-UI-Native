const ThemeProvider = `
~~~jsx
/**
 * If you don't wrap your App component with ThemeProvider, 
 * it will use "light" mode by default.
 */

import { ThemeProvider } from '@growth-ui/native';

// Automatically updates color scheme, 
// either through direct user action (e.g. theme selection in device settings) 
// or on a schedule (e.g. light and dark themes that follow the day/night cycle).
const App = () => (
  <ThemeProvider mode='auto'>
    <AppComponent />
  </ThemeProvider>
)

// Or manually
const App = () => (
  <ThemeProvider mode='light'>
    <AppComponent />
  </ThemeProvider>
)

const App = () => (
  <ThemeProvider mode='dark'>
    <AppComponent />
  </ThemeProvider>
)
~~~
`;

export default ThemeProvider;
