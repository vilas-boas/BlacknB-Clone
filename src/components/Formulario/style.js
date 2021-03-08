import styled from "styled-components";

export const ContainerForm = styled.div`
    box-sizing: border-box;
    display: block;
    float: none;
    line-height: 21px;
    position: static;
    z-index: auto;
`;

export const FormBuscar = styled.form`
    box-sizing: border-box;
    display: flex;
    float: none;
    line-height: 21px;
    position: static;
    z-index: auto;
`;

export const InputBusca = styled.input`
    border: 0.5px solid rgb(59, 46, 29);
    border-radius: 5px;
    outline: currentcolor none medium;
    height: 40px;
    font-family: Montserrat;
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    margin-right: 10px;
`;

export const ButtonBusca = styled.button`
    width: max-content;
    padding: 0.75rem 1.75rem;
    border-radius: 5px;
    outline: currentcolor none medium;
    border: medium none;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    overflow-wrap: break-word;
    background-color: rgb(59, 46, 29);
    color: rgb(255, 255, 255);
    filter: none;
    cursor: pointer;
`;