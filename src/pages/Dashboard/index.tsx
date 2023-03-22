import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import AuthSvg from '../../assets/auth.svg'
import { Button } from '../../components/Button'
import { useAppSelector } from '../../redux/hooks/useAppSelector'

export const Dashboard = () => {
    const navigate = useNavigate()
    const user = useAppSelector(state => state.user)
    const theme = useAppSelector(state => state.theme)

    const handleBackToLogin = () => {
        navigate('/')
    }

    return (
        <C.Container theme={theme.status}>
            <C.MessageContainer theme={theme.status}>
                <C.MessageTitle>Bem-vindo (a) {user.name}</C.MessageTitle>
                <C.MessageImage src={AuthSvg} />
                <Button message='SAIR' clickFn={handleBackToLogin} />
            </C.MessageContainer>
        </C.Container>
    )
}