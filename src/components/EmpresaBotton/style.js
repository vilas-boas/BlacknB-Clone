import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
`;

export const CardEmpresa = styled.button`
    margin: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    background-color: rgba(59, 46, 29, 0.5);
    border: none;
    width: 224px;
    height: 157px;

    &:hover {
        background-color: rgba(191, 133, 20, 0.5);
    }
`;

export const SpanButton = styled.span`
    align-items: center;
    padding: 16px;
`;

