import styled from 'styled-components';

const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0;
  padding: 0;

  max-height: 400px;
  overflow: scroll;

  @media (min-width: 768px) {
    max-height: calc(100% - 100px);
  }
`;

export default ReviewsList;
