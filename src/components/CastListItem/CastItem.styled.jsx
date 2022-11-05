import styled from 'styled-components';

const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;

  .cast {
    &__item {
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
    }

    &__name {
      margin: 0;

      font-weight: 600;
      font-size: 16px;
    }

    &__avatar {
      display: block;
      box-shadow: 3px 5px 20px 2px rgba(105, 111, 116, 0.491);

      border-radius: 50%;

      width: 120px;
      height: 120px;

      overflow: hidden;
      object-fit: cover;
    }

    &__role {
      font-size: 12px;
    }
  }
`;

export default CastItem;
