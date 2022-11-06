import styled from 'styled-components';

const Cast = styled.ul`
  margin: 15px auto 0;
  display: grid;
  padding: 20px;
  grid-template-columns: 100%;
  list-style-type: none;
  justify-content: space-between;
  gap: 30px;
  max-height: 400px;
  overflow: scroll;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 120px);
    max-height: calc(100% - 100px);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 120px);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 120px);
  }
`;

export default Cast;
