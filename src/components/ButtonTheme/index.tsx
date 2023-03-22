import { useContext } from 'react'
import { Context } from '../../contexts/Context'


import * as C from './styles'
import SunPng from '../../assets/sun.png'
import MoonPng from '../../assets/moon.png'

export const ButtonTheme = () => {
    const { state, dispatch } = useContext(Context)

    const handleChangeTheme = () => {
        if (state.theme.status === 'light') {
            dispatch({
                type: "CHANGE_THEME",
                payload: {
                    status: "dark"
                }
            })
        } else {
            dispatch({
                type: "CHANGE_THEME",
                payload: {
                    status: "light"
                }
            })
        }
    }

    return (
        <C.ButtonChangeTheme onClick={handleChangeTheme}>
            {state.theme.status === 'light' &&
                <C.ThemeIcon src={SunPng} />
            }
            {state.theme.status !== 'light' &&
                <C.ThemeIcon src={MoonPng} />
            }
        </C.ButtonChangeTheme>
    )
}