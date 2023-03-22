import { createContext, useReducer } from 'react'
import { ReducerActionType } from '../types/ReducerActionType'
import { ThemeType, themeInitialState, themeReducer } from '../reducers/themeReducer'
import { UserType, userInicialState, userReducer } from '../reducers/userReducer'

type InitialStateType = {
    theme: ThemeType,
    user: UserType,
}

type ContextType = {
    state: InitialStateType,
    dispatch: React.Dispatch<any>
}

const initialState = {
    theme: themeInitialState,
    user: userInicialState,
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: InitialStateType, action: ReducerActionType) => ({
    theme: themeReducer(state.theme, action),
    user: userReducer(state.user, action)
})

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}