import styled from "styled-components";

export const Checkbox = styled.input`
  width: 26px;
  height: 26px;

  border-radius: 2px;
  border: 1px solid #6c63ff;

  appearance: none;
  position: relative;
  cursor: pointer;
  background: #6c63ff;
  box-shadow: inset 0 0 5px rgb(0 0 0 / 0.2);

  transition: 500ms;

  &:after {
    content: "\\2714";
    position: absolute;
    top: -2px;
    left: 4px;
    width: 0px;
    height: 0px;
    font-size: 20px;
    transition: 500ms;
    overflow: hidden;
    color: white;
  }

  &:checked::after {
    width: 30px;
    height: 30px;
    transition: 500ms;
  }
`;
