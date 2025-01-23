import styled from "styled-components";

export const Wrapper = styled.div`
  width: 94px;

  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #6c63ff;
  border-radius: 5px;
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 38px;
`;

interface isTitle {
  isTitle?: string;
}

export const TitleList = styled.div<isTitle>`
  font-size: 16px;

  color: ${(props) => (props.isTitle ? "white" : "#6c63ff")};
  padding-left: 6px;
  padding-top: 8px;

  &:last-child {
    padding-bottom: 8px;
  }

  &:hover {
    background-color: ${(props) => (props.isTitle ? "#5850dd" : "#b9b6f4")};
  }
`;
