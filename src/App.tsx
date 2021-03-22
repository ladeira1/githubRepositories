import { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';

type Theme = 'dark' | 'light';

export const App: FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  function handleThemeChange(newTheme: Theme) {
    setTheme(newTheme);
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <Header theme={theme} onThemeChange={handleThemeChange} />
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
};
