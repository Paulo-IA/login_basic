import { ReducerActionType } from "../types/ReducerActionType"

export type ThemeType = {
    status: 'dark' | 'light'
}

export const themeInitialState: ThemeType = {
    status: 'light'
}

export const themeReducer = (state: ThemeType, action: ReducerActionType) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {...state, status: action.payload.status}
        break;
    }
    return state;
}