const { default: styled } = require('styled-components');

const NavBar = styled.nav`
  padding: 40px;
  display: flex;
  justify-content: center;
  gap: 60px;
  font-size: 30px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgb(255, 245, 220);

  color: #000000;

  font-weight: 600;

  .movie-page & {
    background-color: transparent;
    color: rgb(255, 245, 220);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
`;

export default NavBar;
