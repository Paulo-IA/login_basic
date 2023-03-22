import styled from "styled-components";
import { ThemeProps } from "../Login/styles";

export const Container = styled.div<ThemeProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
    color: ${props => props.theme === 'light'? '#222222' : '#FFFFFF' };
`;

export const MessageContainer = styled.div<ThemeProps>`
    width: 400px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: ${props => props.theme === 'light' ? '0 0 10px #CCC' : '0 0 10px #000' };
    background-color: ${props => props.theme === 'light' ? '#FFFFFF' : '#222222'};
`;

export const MessageTitle = styled.div`
    font-size: 26px;
    text-align: center;
    letter-spacing: 2px;
    font-weight: 200;
    margin-bottom: 40px;
`;

export const MessageImage = styled.img`
    width: 200px;
`;