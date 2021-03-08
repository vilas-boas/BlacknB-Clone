import styled from 'styled-components';

export const Section = styled.div`
    box-sizing: border-box;
    display: flex;
    float: none;
    line-height: 21px;
    position: fixed;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 4px;
    padding: 12px 32px;
    width: 100%;
    background-color: white;
    justify-content: space-between;
    -moz-box-align: center;
    align-items: center;
`;

export const LogoContainer = styled.a`
    text-decoration: none;
    color: rgb(59, 46, 29);
`;

export const OpcoesContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    float: none;
    line-height: 21px;
    position: static;
    z-index: auto;
`;

export const Button = styled.button`
    cursor: pointer;
    margin-right: 16px;
    border: medium none;
    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
    color: rgb(191, 133, 20);
    font-weight: bold;
    font-size: 14px;
    padding: 0.5rem 0px;
`;

export const Login = styled.a`
    text-decoration: none;
    width: max-content;
    padding: 12px 28px;
    border-radius: 5px;
    outline: currentcolor none medium;
    border: medium none;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    overflow-wrap: break-word;
    background-color: rgb(255, 255, 255);
    color: rgb(43, 43, 43);
    filter: none;
    cursor: pointer;
`;