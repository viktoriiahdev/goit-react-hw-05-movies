import styled from 'styled-components';

const MovieContainer = styled.main`
  position: fixed;
  left: 0;
  right: 0;
  display: grid;
  padding: 130px 30px 15px;
  gap: 30px;
  grid-template-columns: 300px auto;
  grid-template-areas: 'poster details' 'poster description';
  max-width: 1100px;
  margin: 0 auto;

  color: #ffffff;

  img {
    grid-area: poster;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 0px 40px 10px #a5999938;
  }

  .movie__title {
    font-size: 42px;
    margin-bottom: 10px;
  }

  .movie__genres {
    display: flex;
    gap: 10px;

    span {
      border-radius: 25px;
      /* background-color: rgb(255, 245, 220); */
      border: 1px solid #ffa50a;
      padding: 7px 15px;
      color: #ffa50a;
      font-weight: bold;
      font-size: 14px;
    }
  }

  .movie__details {
    overflow: scroll;
    max-height: calc(100vh - 130px);
  }

  .movie__tag {
    font-style: italic;
  }

  .movie__overview {
    margin: 30px 0;
  }

  .movie__additional {
    grid-area: additional;
  }

  nav {
    display: inline-flex;
    justify-content: flex-start;
    border-radius: 30px;
    gap: 30px;
    /* border: 1px solid rgb(255, 245, 220); */

    position: relative;
  }
`;
export default MovieContainer;
