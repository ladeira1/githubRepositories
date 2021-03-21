import styled from 'styled-components';

export const Container = styled.section`
  width: 95vw;
  max-width: 1300px;
  height: 90vh;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.background};

  h2 {
    font-size: 1.8rem;
    text-align: center;
  }

  .input-wrapper {
    @media screen and (min-width: 900px) {
      display: flex;
      align-items: center;
      justify-content: center;

      h2 {
        margin-top: 1rem;

        text-align: left;
      }
    }
  }
`;
