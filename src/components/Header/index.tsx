import * as C from './styles'
import { ButtonTheme } from '../ButtonTheme'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

export const Header = () => {
    const { state, dispatch } = useContext(Context)

    return (
        <C.Container theme={state.theme.status}>
            <C.Landmark theme={state.theme.status}>BasicLogin</C.Landmark>
            <ButtonTheme />
        </C.Container>
    )
}