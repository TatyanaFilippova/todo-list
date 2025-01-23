import styled from "styled-components";


export const InputSearch = styled.input`
    width: 595px;
    border: 1px solid #6C63FF;
    border-radius: 5px;
    height: 38px;
    padding-left: 16px;
    font-size: 16px;
    color: #6C63FF;

    &:focus {
        box-shadow: 0 0 2px 2px #9b95fb;

    }
    
    &::placeholder{
        color: #C3C1E5;
    }

`
export const IconSearch = styled.img`
    width: 22px;
    height: 22px;
    right: 16px;
    top: 8px;
    position: absolute;
`

export const Wrapper = styled.div`
    position: relative;
    `
