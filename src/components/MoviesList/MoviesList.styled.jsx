import styled from 'styled-components';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2fr);
  max-width: 1100px;
  margin: 60px auto 0;
  gap: 30px;
`;
export default Grid;
