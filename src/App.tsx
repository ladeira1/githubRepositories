import { FC, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { Header } from './components/Header';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';
import 'react-toastify/dist/ReactToastify.min.css';

type Theme = 'dark' | 'light';

export const App: FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  function handleThemeChange(newTheme: Theme) {
    setTheme(newTheme);
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <ToastContainer />
      <BrowserRouter>
        <Header theme={theme} onThemeChange={handleThemeChange} />
        <Routes />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
};
