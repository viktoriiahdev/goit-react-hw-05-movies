import styled from 'styled-components';

const MovieBackground = styled.div`
  background-color: black;
  background-image: linear-gradient(to right, #00000055 0%, #000000ff 100%),
    ${props => props.bgImage};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top, top;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default MovieBackground;
