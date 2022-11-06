import styled from 'styled-components';

const CastItem = styled.li`
  position: relative;

  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 25px;
  column-gap: 15px;
  grid-template-areas: 'avatar .' 'avatar name' 'avatar info' 'avatar .';

  max-height: 100px;

  @media (min-width: 768px) {
    max-height: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    gap: 10px;

    flex-wrap: nowrap;
  }

  .cast {
    &__name {
      grid-area: name;

      margin: 0;

      font-weight: 600;
      font-size: 16px;
    }

    &__avatar {
      grid-area: avatar;
      display: block;
      box-shadow: 3px 5px 20px 2px rgba(105, 111, 116, 0.491);

      border-radius: 50%;

      width: 100px;
      height: 100px;

      overflow: hidden;
      object-fit: cover;

      @media (min-width: 768px) {
        width: 120px;
        height: 120px;
      }
    }

    &__role {
      grid-area: info;

      font-size: 12px;
    }
  }
`;

export default CastItem;
