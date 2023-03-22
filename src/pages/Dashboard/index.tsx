import { useContext } from 'react'
import { Context } from '../../contexts/Context'
import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import AuthSvg from '../../assets/auth.svg'
import { Button } from '../../components/Button'

export const Dashboard = () => {
    const { state, dispatch } = useContext(Context)
    const navigate = useNavigate()

    const handleBackToLogin = () => {
        navigate('/')
    }

    return (
        <C.Container theme={state.theme.status}>
            <C.MessageContainer theme={state.theme.status}>
                <C.MessageTitle>Bem-vindo (a) {state.user.name}</C.MessageTitle>
                <C.MessageImage src={AuthSvg} />
                <Button message='SAIR' clickFn={handleBackToLogin} />
            </C.MessageContainer>
        </C.Container>
    )
}