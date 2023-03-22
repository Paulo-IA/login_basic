import * as C from './styles'
import NotFoundSvg from '../../assets/notfound.svg'
import NotFoundSvg2 from '../../assets/notfound2.svg'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks/useAppSelector'

export const NotFound = () => {
    const user = useAppSelector(state => state.user)
    const theme = useAppSelector(state => state.theme)

    const navigate = useNavigate()

    const handleBackToLogin = () => {
        navigate(-1)
    }
    
    return (
        <C.Container theme={theme.status}>
            <C.NotFoundContainer>
                {theme.status === 'dark' &&
                    <C.NotFoundImg src={NotFoundSvg2} />
                }
                {theme.status !== 'dark' &&
                    <C.NotFoundImg src={NotFoundSvg} />
                }
                <C.NotFoundText>Página não encontrada!</C.NotFoundText>
                <Button message='VOLTAR' clickFn={handleBackToLogin} />
            </C.NotFoundContainer>
        </C.Container>
    )
}