import { FC, useContext } from 'react';
import { IconType } from 'react-icons/lib';
import { ThemeContext } from 'styled-components';
import { useClick } from '../../hooks/useClick';
import { Container, ButtonComponent } from './styles';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  Icon?: IconType;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  Icon,
  type = 'button',
}) => {
  const { colors } = useContext(ThemeContext);

  const [isClicked, onbuttonClick] = useClick(100);

  function handleButtonClick() {
    onbuttonClick();
    if (onClick) onClick();
  }

  return (
    <Container>
      <ButtonComponent
        type={type}
        onClick={handleButtonClick}
        isClicked={isClicked}
      >
        <strong>
          {text}
          {Icon && (
            <Icon width={30} color={colors.text} style={{ marginLeft: '5' }} />
          )}
        </strong>
      </ButtonComponent>
    </Container>
  );
};
