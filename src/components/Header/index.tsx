import * as C from './styles'
import { ButtonTheme } from '../ButtonTheme'
import { useAppSelector } from '../../redux/hooks/useAppSelector'

export const Header = () => {
    const theme = useAppSelector(state => state.theme)

    return (
        <C.Container theme={theme.status}>
            <C.Landmark theme={theme.status}>BasicLogin</C.Landmark>
            <ButtonTheme />
        </C.Container>
    )
}