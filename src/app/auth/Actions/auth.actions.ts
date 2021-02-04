import { Action } from '@ngrx/store';
import { IUser } from 'src/app/interfaces/IUser';

export enum AuthActionTypes {
  LoggedUser = '[Auth] LOGED_USER',
  LogginUser = '[Auth] LOGIN_USER',
  LogginUserError = '[Auth] LOGIN_USER_ERROR',
  LoggedIn = '[Auth] LOGGED_IN',
  LogoutAuth = '[Auth] LOGOUT_USER',
}

export class LoggedIn implements Action {
  readonly type = AuthActionTypes.LoggedIn;
  constructor(public payload: { isLogin: boolean }) {}
}

export class LogoutAuth implements Action {
  readonly type = AuthActionTypes.LogoutAuth;
  constructor(public payload: { isLogin: boolean }) {}
}

export class LogginUserError implements Action {
  readonly type = AuthActionTypes.LogoutAuth;
  constructor(public payload: { error: string }) {}
}

export class LogginUser implements Action {
  readonly type = AuthActionTypes.LogoutAuth;
  constructor(public payload: { user: IUser }) {}
}

export class LoggedUser implements Action {
  readonly type = AuthActionTypes.LogoutAuth;
  constructor(public payload: {isLoading: boolean, error: boolean, user: IUser}) {}
}

export type actions = LoggedIn | LogoutAuth | LogginUserError | LogginUser | LoggedUser;
