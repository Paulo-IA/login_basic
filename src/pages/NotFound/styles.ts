import styled from "styled-components";
import { ThemeProps } from "../Login/styles";

export const Container = styled.div<ThemeProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;
    color: ${props => props.theme === 'light'? '#222222' : '#FFFFFF' };
`;

export const NotFoundContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NotFoundImg = styled.img<ThemeProps>`
    width: ${props => props.theme === 'light' ? '300px' : '200px'}
`;

export const NotFoundText = styled.div`
    margin-top: 20px;
    font-size: 28px;
    letter-spacing: 2px;
    font-weight: 300;
    text-align: center;
`;