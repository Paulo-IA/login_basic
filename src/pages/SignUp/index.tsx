import * as C from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Context } from '../../contexts/Context'
import SignUpSvg from '../../assets/signup.svg'
import { Button } from '../../components/Button'

export const SignUp = () => {
    const { state, dispatch } = useContext(Context)
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSignUpUser = () => {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos")
        }

        dispatch({
            type: "STORE_INFOS",
            payload: {
                name, email, password
            }
        })
        navigate('/')
    }

    return (
        <C.Container theme={state.theme.status}>
            <C.SigInContainer theme={state.theme.status}>
                <C.SignUpTitle>CADASTRO</C.SignUpTitle>
                <C.FormSignUp>
                    <C.Label>Nome</C.Label>
                    <C.Input 
                        type='text'
                        placeholder='Nome'
                        value={name}
                        onChange={handleNameChange}
                    />
                    <C.Label>E-MAIL</C.Label>
                    <C.Input 
                        type='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <C.Label>SENHA</C.Label>
                    <C.Input 
                        type='password'
                        placeholder='Senha'
                        value={password}
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