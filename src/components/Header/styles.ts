import styled from 'styled-components';

import { FiMenu } from 'react-icons/fi';
import { darken } from 'polished';

export const Container = styled.header`
  width: 100vw;
  max-width: 1300px;
  height: 5rem;

  margin: 0 auto;
  padding: 0 1rem;

  background: ${({ theme }) => theme.colors.background};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};

  position: static;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > div {
    margin-left: 0.5rem;

    h1 {
      font-size: 1.25rem;

      @media screen and (min-width: 380px) {
        font-size: 1.5rem;
      }

      @media screen and (min-width: 500px) {
        font-size: 1.75rem;
      }

      @media screen and (min-width: 570px) {
        font-size: 2rem;
      }

      @media screen and (min-width: 720px) {
        font-size: 2.25rem;
      }
    }

    .header-title-redline {
      width: 3.3rem;
      height: 2px;

      background: ${({ theme }) => theme.colors.red};
    }
  }
`;

export const MenuContainer = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Wrapper = styled.section`
  position: relative;
`;

export const FiMenuIcon = styled(FiMenu)`
  &:hover {
    cursor: pointer;
  }
`;

export const Items = styled.div`
  position: absolute;
  top: 3.7rem;
  right: 0rem;

  width: 20rem;

  background: ${({ theme }) => darken(0.05, theme.colors.secondary)};
  border-radius: 0.75rem;

  padding: 0.75rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    :not(:first-child) {
      margin-top: 1.25rem;
    }
  }
`;

export const Redline = styled.div`
  width: 2.5rem;
  height: 1.75px;

  margin-top: 0.25rem;

  background: ${({ theme }) => theme.colors.red};
`;

export const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  label {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    margin-top: 0.5rem;
    margin-bottom: 0.15rem;

    cursor: pointer;

    input {
      display: none;
    }

    p {
      margin-left: 0.25rem;
    }
  }
`;
