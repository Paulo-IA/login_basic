import { useAppSelector } from '../../redux/hooks/useAppSelector'

import * as C from './styles'
import SunPng from '../../assets/sun.png'
import MoonPng from '../../assets/moon.png'
import { useDispatch } from 'react-redux'
import { setThemeStatus } from '../../redux/reducers/themeReducer'

export const ButtonTheme = () => {
    const dispatch = useDispatch()
    const theme = useAppSelector(state => state.theme)

    const switchTheme = (newTheme: string) => dispatch( setThemeStatus(newTheme) )

    const handleChangeTheme = () => {
        switchTheme(theme.status === 'light' ? 'dark' : 'light')
    }

    return (
        <C.ButtonChangeTheme onClick={handleChangeTheme}>
            {theme.status === 'light' &&
                <C.ThemeIcon src={SunPng} />
            }
            {theme.status !== 'light' &&
                <C.ThemeIcon src={MoonPng} />
            }
        </C.ButtonChangeTheme>
    )
}