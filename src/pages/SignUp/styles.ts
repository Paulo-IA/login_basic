import styled from "styled-components";

type ThemeProps = {
    theme: string;
}

export const Container = styled.div`
    width: 100%;
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: ${props => props.theme === 'light'? '#222222' : '#FFFFFF' };

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const SignUpImg = styled.img`
    width: 500px;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const SigInContainer = styled.div<ThemeProps>`
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: ${props => props.theme === 'light' ? '0 0 10px #CCC' : '0 0 10px #000' };
    background-color: ${props => props.theme === 'light' ? '#FFFFFF' : '#222222'};
`;

export const SignUpTitle = styled.div`
    font-size: 35px;
    letter-spacing: 2px;
    font-weight: 200;
`;

export const FormSignUp = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Label = styled.div`
    font-size: 10px;
    letter-spacing: 3px;
    margin: 25px 0 5px 5px;
`;

export const Input = styled.input`
    height: 30px;
    border: 1px solid #CCC;
    outline: 0;
    font-size: 16px;
    padding-left: 15px;
    border-radius: 5px;
`;

export const BottomText = styled.div`
    text-align: center;
    font-weight: 400;
`;

export const Link = styled.div`
    color: #036ebe;
`;
