import styled from 'styled-components';

export const Container = styled.footer`
    background-color: rgb(59, 46, 29);
    color: rgb(255, 255, 255);
    padding: 24px 48px;
    bottom: 0px;
`;

export const ContainerFooter = styled.div`
    display: flex;
    -moz-box-pack: justify;
    justify-content: space-between;
    -moz-box-align: center;
    align-items: center;
    width: 100%;
`;

export const ContainerSidebar = styled.div`
    display: flex;
    -moz-box-align: unset;
    align-items: unset;
    flex-direction: row;
    width: auto;
`;

export const ContainerMenu = styled.div`
    box-sizing: border-box;
    display: flex;
    float: none;
    line-height: 21px;
    position: static;
    z-index: auto;
`;

export const LinkFooter = styled.a`
    color: white;
    text-decoration: none;
    margin: 0px 16px 0px 0px;
`;

export const SpanFooter = styled.span`
    margin-right: 24px;
`;

export const ContainerRedes = styled.div`
    display: flex;
    -moz-box-align: center;
    align-items: center;
    flex-direction: row;
    width: auto;
`;

export const SelectFooter = styled.select`
    border: 0.5px solid rgb(59, 46, 29);
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    outline: currentcolor none medium;
    min-height: 40px;
    font-family: Montserrat, sans-serif;
    box-sizing: border-box;
    width: auto;
    padding: 12px;
`;