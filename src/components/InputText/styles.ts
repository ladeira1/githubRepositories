/* eslint-disable prettier/prettier */
import styled from 'styled-components';

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.label<ContainerProps>`
  width: 100%;
  height: 60px;

  margin-top: 1rem;

  border-radius: 0.5rem;
  border: 2px solid ${({ isSelected, theme }) => (isSelected ? theme.colors.text : 'transparent')};

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.secondary};

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  input {
    flex: 1;
    height: 100%;

    background: transparent;

    padding: 1rem;

    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: ${({ isSelected, theme }) => (isSelected ? theme.fontWeight.semiBold : theme.fontWeight.regular)};

    border: none;

    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

export const IconWrapper = styled.div<ContainerProps>`
  width: 70px;
  height: 100%;
  border-right: 2px solid ${({ isSelected, theme }) => (isSelected ? theme.colors.text : theme.colors.textSecondary)};

  display: flex;
  align-items: center;
  justify-content: center;
`;
