import styled from 'styled-components';

const Cast = styled.ul`
  margin: 15px auto 0;
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(5, 120px);
  list-style-type: none;
  justify-content: space-between;
  gap: 30px;
  max-height: 400px;
  overflow: scroll;
`;

export default Cast;
