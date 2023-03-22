import { ReducerActionType } from "../types/ReducerActionType";

export type UserType = {
    name: string,
    email: string,
    password: string,
}

export const userInicialState: UserType = {
    name: '',
    email: '',
    password: '',
}

export const userReducer = (state: UserType, action: ReducerActionType) => {
    switch (action.type) {
        case "STORE_INFOS":
            return {...state,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
            }
        break;
    }

    return state;
}