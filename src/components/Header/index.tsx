import { FC, useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { FiGithub, FiCheckCircle, FiCircle } from 'react-icons/fi';
import {
  Container,
  MenuContainer,
  Wrapper,
  FiMenuIcon,
  Items,
  Redline,
  ThemeSwitcher,
} from './styles';

type Theme = 'dark' | 'light';

interface HeaderProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const Header: FC<HeaderProps> = ({ theme, onThemeChange }) => {
  const { colors } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(oldState => !oldState);
  }

  return (
    <Container>
      <FiGithub size={30} color={colors.textTitle} />
      <div>
        <h1>Github Repositories</h1>
        <div className="header-title-redline" />
      </div>
      <MenuContainer>
        <Wrapper>
          <FiMenuIcon
            size={30}
            color={colors.textTitle}
            onClick={handleToggleMenu}
          />
          {isOpen && (
            <Items>
              <div>
                <h3>Check another account</h3>
                <Redline />
              </div>
              <div>
                <h3>Change theme</h3>
                <ThemeSwitcher>
                  <label htmlFor="radio-dark">
                    <input
                      id="radio-dark"
                      type="radio"
                      value="dark"
                      name="dark"
                      onClick={() => onThemeChange('dark')}
                    />
                    {theme === 'dark' ? (
                      <FiCheckCircle size={20} color={colors.red} />
                    ) : (
                      <FiCircle size={20} color={colors.whitePure} />
                    )}
                    <p>dark</p>
                  </label>
                  <label htmlFor="radio-light">
                    <input
                      id="radio-light"
                      type="radio"
                      value="light"
                      name="light"
                      onClick={() => onThemeChange('light')}
                    />
                    {theme === 'light' ? (
                      <FiCheckCircle size={20} color={colors.red} />
                    ) : (
                      <FiCircle size={20} color={colors.whitePure} />
                    )}
                    <p>light</p>
                  </label>
                </ThemeSwitcher>
                <Redline />
              </div>
            </Items>
          )}
        </Wrapper>
      </MenuContainer>
    </Container>
  );
};
