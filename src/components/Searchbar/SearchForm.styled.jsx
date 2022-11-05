import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: inherit;
  overflow: hidden;

  border-bottom: 1px solid #000;

  .SearchForm-button {
    appearance: none;
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-image: url('https://cdn-icons-png.flaticon.com/512/149/149852.png');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    background-color: rgb(255, 245, 220);
  }

  .SearchForm-button:hover {
    opacity: 1;
  }

  .SearchForm-button-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }

  .SearchForm-input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;

    font-weight: 500;

    background-color: inherit;
  }

  .SearchForm-input::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export default Form;
