import * as C from './styles'
import NotFoundSvg from '../../assets/notfound.svg'
import NotFoundSvg2 from '../../assets/notfound2.svg'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

export const NotFound = () => {
    const { state, dispatch } = useContext(Context)
    const navigate = useNavigate()

    const handleBackToLogin = () => {
        navigate(-1)
    }
    
    return (
        <C.Container theme={state.theme.status}>
            <C.NotFoundContainer>
                {state.theme.status === 'dark' &&
                    <C.NotFoundImg src={NotFoundSvg2} />
                }
                {state.theme.status !== 'dark' &&
                    <C.NotFoundImg src={NotFoundSvg} />
                }
                <C.NotFoundText>Página não encontrada!</C.NotFoundText>
                <Button message='VOLTAR' clickFn={handleBackToLogin} />
            </C.NotFoundContainer>
        </C.Container>
    )
}