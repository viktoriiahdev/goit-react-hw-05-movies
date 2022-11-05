import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TabLink = styled(NavLink)`
  color: rgb(255, 245, 220);
  position: relative;

  background-color: transparent;
  border-radius: 30px;
  padding: 10px 0;
  /* border: 1px solid rgb(255, 245, 220); */

  transition-property: color, background-color;
  transform-origin: center center;
  transition-duration: 300ms;
  transition-timing-function: ease;

  text-transform: uppercase;

  &::after {
    transition: transform 300ms ease 0s;
  }

  &.active {
    &::after {
      content: '';
      display: block;
      height: 2px;
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

export default TabLink;
