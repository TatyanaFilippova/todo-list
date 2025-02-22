import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: start;
  width: 100%;
  border-bottom: 1px solid #6c63ff;
  padding-bottom: 16px;
  position: relative;
`;

interface TitleProps {
  isChecked: boolean;
}

export const Title = styled.div<TitleProps>`
  font-size: 20px;
  padding-left: 18px;
  ${(props) =>
    props.isChecked &&
    css`
      text-decoration: line-through;
      color: #25252580;
    `}
`;

export const IconEdit = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 36px;
  cursor: pointer;
`;

export const IconDelete = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 8px;
  cursor: pointer;
`;
