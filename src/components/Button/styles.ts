import styled from 'styled-components';

interface ButtonProps {
  isClicked: boolean;
}

export const Container = styled.div`
  width: 100%;

  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ButtonComponent = styled.button<ButtonProps>`
  width: 100%;
  height: 60px;

  margin-top: 1rem;

  background-color: ${({ theme }) => theme.colors.red};

  border: none;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    width: 40%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 0.5rem;
    font-size: 1.5rem;
  }

  transition: all 0.2s, scale 0.05s;

  transform: scale(${({ isClicked }) => (isClicked ? 0.95 : 1)});

  &:hover {
    filter: brightness(0.8);
  }

  @media screen and (min-width: 900px) {
    width: 30%;
  }
`;
