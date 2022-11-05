import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  color: black;
  position: relative;

  transition-property: color;
  transform-origin: center center;
  transition-duration: 300ms;
  transition-timing-function: ease;

  .movie-page & {
    color: rgb(255, 245, 220);
  }

  &::after {
    transition: transform 300ms ease 0s;
  }

  &.active {
    &::after {
      content: '';
      display: block;
      height: 4px;
      bottom: -10px;
      background-color: #ffa50a;
      transform: scaleX(1);
    }
  }

  &:hover {
    color: #ffa50a;

    &::after {
      transform: scaleX(0.2);
    }
  }
`;

export default NavItem;
