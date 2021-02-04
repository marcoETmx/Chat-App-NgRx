import * as AuthActions from '../Actions/auth.actions'
import { actions, AuthActionTypes } from '../Actions/auth.actions'

export interface State {
    user: Array<any>;
    tokens: Array<any>;
    error: string;
    isLoading: boolean;
}

const initialState: State = {
    user: [],
    tokens: [],
    error: '',
    isLoading: false
}

export function AuthReducer(state= [], action: actions){
    switch(action.type){
        case AuthActionTypes.LogginUser:
            return action;
        case AuthActionTypes.LoggedUser:
            return {
                ...state,
                isLoading: false,
                token: action.payload
            }
        default:
            return state
        }
}

export const getAuthSate = (state: State) => state.user;
export const getAuthAction = (action: any) => action.payload;
export const getAuthError = (state: State) => state.error;