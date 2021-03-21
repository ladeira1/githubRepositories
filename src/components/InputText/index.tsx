import { FC, useContext, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { Container, IconWrapper } from './styles';

interface InputTextProps {
  placeholder: string;
  value: string;
  onUsernameChange: (value: string) => void;
}

export const InputText: FC<InputTextProps> = ({
  placeholder,
  value,
  onUsernameChange,
}) => {
  const { colors } = useContext(ThemeContext);

  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container
      htmlFor="value"
      onFocus={() => setIsSelected(true)}
      onBlur={() => setIsSelected(false)}
      isSelected={isSelected}
    >
      <IconWrapper isSelected={isSelected}>
        <FiUser
          size={30}
          color={isSelected ? colors.text : colors.textSecondary}
        />
      </IconWrapper>
      <input
        id="value"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={event => onUsernameChange(event.target.value)}
      />
    </Container>
  );
};
