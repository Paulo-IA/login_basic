import styled from "styled-components";

type ThemeProps = {
    theme: string;
}

export const Container = styled.header<ThemeProps>`
    height: 70px;
    box-shadow: ${props => props.theme === 'light' ? '0 0 10px #CCC' : '0 0 10px #000' };
    background-color: ${props => props.theme === 'light' ? '#FFFFFF' : '#222222'};

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Landmark = styled.div<ThemeProps>`
    font-size: 25px;
    color: ${props => props.theme === 'light' ? '#222222' : '#FFFFFF'};
    letter-spacing: 2px;
    margin-left: 25px;
`;
