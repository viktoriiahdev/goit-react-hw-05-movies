import styled from 'styled-components';

const Grid = styled.ul`
  display: grid;
  padding: 0 20px;
  max-width: 100%;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2fr);
  margin: 60px auto 0;
  gap: 30px;

  @media (min-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    max-width: 1100px;
  }
`;
export default Grid;
