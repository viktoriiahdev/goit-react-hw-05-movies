import styled from 'styled-components';

const MovieContainer = styled.main`
  position: relative;

  display: grid;
  padding: 130px 30px 15px;
  gap: 30px;
  grid-template-columns: 100%;
  grid-template-areas: 'poster' 'details' 'additional';
  max-width: 1100px;
  margin: 0 auto;

  color: #ffffff;

  @media (min-width: 768px) {
    position: fixed;
    left: 0;
    right: 0;
    grid-template-columns: 200px auto;
    grid-template-rows: 280px auto;
    grid-template-areas: 'poster details' 'poster additional';

    height: calc(100vh - 130px);
  }

  @media (min-width: 1024px) {
    grid-template-columns: 300px auto;
  }

  img {
    grid-area: poster;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 0px 40px 10px #a5999938;
  }

  .movie__title {
    margin-bottom: 10px;
    font-size: 36px;

    @media (min-width: 1024px) {
      font-size: 42px;
    }
  }

  .movie__genres {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    span {
      border-radius: 25px;
      /* background-color: rgb(255, 245, 220); */
      border: 1px solid #ffa50a;
      padding: 7px 15px;
      color: #ffa50a;
      font-weight: bold;
      font-size: 14px;
    }

    @media (min-width: 768px) {
      flex-wrap: nowrap;
    }
  }

  .movie__details {
    grid-area: details;

    /* overflow: scroll; */
    /* max-height: calc(100vh - 130px); */

    display: flex;
    flex-direction: column;
  }

  .movie__tag {
    font-style: italic;
  }

  .movie__overview {
    margin: 30px 0;

    @media (min-width: 768px) {
      margin: 0;
      max-height: 180px;
      overflow: scroll;
    }
  }

  .movie__additional {
    grid-area: additional;
    overflow: scroll;
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
