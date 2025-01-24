import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: start;
  width: 100%;
  border-bottom: 1px solid #6c63ff;
  padding-bottom: 16px;
  position: relative;
`;

export const Title = styled.div`
  font-size: 20px;
  padding-left: 18px;
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
