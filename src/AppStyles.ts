import styled from "styled-components";

type ThemeProps = {
    theme: string
}

export const Container = styled.div<ThemeProps>`
    background-color: ${props => props.theme === 'light'? '#FFFFFF' : '#222222' };
    height: 100vh;
`;