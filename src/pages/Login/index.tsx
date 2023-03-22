import { Link, useNavigate } from 'react-router-dom'
import * as C from './styles'
import Land from '../../assets/land.svg'
import { useContext, useState } from 'react'
import { Context } from '../../contexts/Context'
import { Button } from '../../components/Button'

export const Login = () => {
    const { state, dispatch } = useContext(Context)
    const navigate = useNavigate()
    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')

    const handleEmailLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailLogin(e.target.value)
    }
    
    const handlePasswordLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordLogin(e.target.value)
    }

    const handleValidateLogin = () => {
        if (!emailLogin || !passwordLogin || (emailLogin !== state.user.email) || (passwordLogin !== state.user.password)) {
            return alert("Usuário não cadastrado!")
        }

        navigate('/dashboard')
        
    }

    return (
        <C.Container theme={state.theme.status}>
            <C.Land src={Land} />
            <C.LoginContainer theme={state.theme.status}>
                <C.LoginTitle>LOGIN</C.LoginTitle>
                <C.FormLogin>
                    <C.Label>E-MAIL</C.Label>
                    <C.Input 
                        type='email'
                        placeholder='E-mail'
                        value={emailLogin}
                        onChange={handleEmailLoginChange}
                    />
                    <C.Label>SENHA</C.Label>
                    <C.Input 
                        type='password'
                        placeholder='Senha'
                        value={passwordLogin}
                        onChange={handlePasswordLoginChange}
                    />
                    <Button message='ENTRAR' clickFn={handleValidateLogin} />
                    <C.BottomText>
                        Ainda não tem cadastro? 
                        <Link to='/cadastro' style={{textDecoration: 0}}>
                            <C.Link >Cadastre-se já!</C.Link>
                        </Link> 
                    </C.BottomText>
                </C.FormLogin>
            </C.LoginContainer>
        </C.Container>
    )
} 