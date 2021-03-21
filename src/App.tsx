import { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Search } from './components/pages/Search';
import { GlobalStyle } from './styles/global';
import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';

type Theme = 'dark' | 'light';

export const App: FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <Search />
      <GlobalStyle />
    </ThemeProvider>
  );
};
