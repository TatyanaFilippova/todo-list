import styled from "styled-components";

export const ButtonSelect = styled.button`
  width: 94px;
  height: 38px;
  border-radius: 5px;
  background-color: #5850dd;
  color: #f7f7f7;
  font-size: 18px;
  margin-left: 16px;
  position: relative;
  display: flex;
  align-items: center;
`;

interface IconSelectProps {
  isOpen: boolean;
}

export const IconSelect = styled.img<IconSelectProps>`
  width: 6px;
  height: 3px;
  position: absolute;
  right: 4px;

  transform: ${(props) => props.isOpen && "rotate(180deg)"};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const ButtonTitle = styled.div`
  font-size: 16px;
  color: white;
  padding: 10px 43px 10px 6px;
`;
