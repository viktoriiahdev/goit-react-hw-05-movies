import styled from 'styled-components';

const GridItem = styled.li`
  display: grid;
  gap: 30px;
  grid-template-rows: auto 70px;
  a {
    &.card__poster-link {
      position: relative;
    }
    display: flex;
    /* align-items: flex-end; */
  }

  .card__poster-wrapper {
    max-width: 100%;
    max-height: 100%;

    object-fit: cover;
    overflow: hidden;
    border-radius: 20px;
    position: relative;

    box-shadow: 0px 14px 20px 0px #424d46ad;

    transition: transform 300ms ease;

    transform: scale(1);

    &:hover {
      transform: scale(1.05);
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .card__label {
    width: 60px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #747474df;

    color: #ffffff;

    font-weight: bold;

    position: absolute;
    bottom: -15px;
    right: 20px;

    &--bad {
      background-color: #ff0a0a;
    }

    &--middle {
      background-color: #ffa50a;
    }

    &--high {
      background-color: #00af09;
    }

    &--undefined {
      display: none;
    }
  }

  .card__info {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .card__year {
      /* opacity: 0.5; */
      font-weight: 300;
    }
  }

  .card__title {
    color: #000000;
    font-weight: bold;
    transition: color 300ms ease;

    &:hover {
      color: #ffa50a;
    }
  }
`;

export default GridItem;
