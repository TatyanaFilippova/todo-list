import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .ReactModal__Content {
        width: 500px;
        height: 290px;
        margin: 120px auto;
      
       
    }
    
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 24px;
`;

export const InputSearch = styled.input`
  width: 440px;
  border: 1px solid #6c63ff;
  border-radius: 5px;
  height: 38px;
  padding-left: 16px;
  font-size: 16px;
  color: #6c63ff;
  margin-top: 25px;

  &:focus {
    box-shadow: 0 0 2px 2px #9b95fb;
  }

  &::placeholder {
    color: #c3c1e5;
  }
`;

export const ButtonCancel = styled.button`
  width: 110px;
  height: 38px;
  color: #6c63ff;
  background-color: #fff;
  border: 1px solid #6c63ff;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 108px;
  margin-left: 10px;
`;

export const ButtonApply = styled.button`
  width: 98px;
  height: 38px;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 108px;
  background-color: #6c63ff;
  color: white;
  margin-right: 10px;
`;

export const Shell = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
