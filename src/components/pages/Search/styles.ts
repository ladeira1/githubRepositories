import styled from 'styled-components';

export const Container = styled.div`
  width: 95vw;
  max-width: 1300px;
  height: 90vh;

  margin: 0 auto;

  background-color: ${props => props.theme.colors.background};
`;
