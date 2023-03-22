import * as C from './styles'
import { useDispatch } from 'react-redux'
import { setName, setEmail, setPassword } from '../../redux/reducers/userReducer'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SignUpSvg from '../../assets/signup.svg'
import { Button } from '../../components/Button'
import { useAppSelector } from '../../redux/hooks/useAppSelector'

export const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const user = useAppSelector(state => state.user)
    const theme = useAppSelector(state => state.theme)

    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const changeName = (newName: string) => dispatch( setName(newName) )
    const changeEmail = (newEmail: string) => dispatch( setEmail(newEmail) )
    const changePassword = (newPassword: string) => dispatch( setPassword(newPassword) )

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value)
    }
    
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInput(e.target.value)
    }
    
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordInput(e.target.value)
    }

    const handleSignUpUser = () => {
        if (!nameInput || !emailInput || !passwordInput) {
            return alert("Preencha todos os campos")
        }

        changeName(nameInput)
        changeEmail(emailInput)
        changePassword(passwordInput)
        navigate('/')
    }

    return (
        <C.Container theme={theme.status}>
            <C.SigInContainer theme={theme.status}>
                <C.SignUpTitle>CADASTRO</C.SignUpTitle>
                <C.FormSignUp>
                    <C.Label>Nome</C.Label>
                    <C.Input 
                        type='text'
                        placeholder='Nome'
                        value={nameInput}
                        onChange={handleNameChange}
                    />
                    <C.Label>E-MAIL</C.Label>
                    <C.Input 
                        type='email'
                        placeholder='E-mail'
                        value={emailInput}
                        onChange={handleEmailChange}
                    />
                    <C.Label>SENHA</C.Label>
                    <C.Input 
                        type='password'
                        placeholder='Senha'
                        value={passwordInput}
                        onChange={handlePasswordChange}
                    />
                    <Button message='CADASTRE-SE' clickFn={handleSignUpUser} />
                    <C.BottomText>
                        Já cadastrado? 
                        <Link to='/' style={{textDecoration: 0}}>
                            <C.Link>Faça o Login!</C.Link>
                        </Link> 
                    </C.BottomText>
                </C.FormSignUp>
            </C.SigInContainer>
            <C.SignUpImg src={SignUpSvg} />
        </C.Container>
    )
} 