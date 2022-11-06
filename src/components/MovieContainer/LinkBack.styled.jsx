import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkBack = styled(Link)`
  position: fixed;
  z-index: 10;
  padding: 40px 15px;
  font-size: 30px;
  font-weight: bold;
  color: #ffa50a;

  span {
    display: none;
  }

  @media (min-width: 768px) {
    padding: 40px;

    span {
      display: inline-block;
    }
  }
`;

export default LinkBack;
