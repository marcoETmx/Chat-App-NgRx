import { Injectable } from '@angular/core';
import { ofType, Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';
import {
  AuthActionTypes,
  LoggedIn,
  LoggedUser,
  LogginUser,
  LogginUserError,
} from '../Actions/auth.actions';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  LoginUserError$: Observable<Action> = this.actions$.pipe(
    ofType<LogginUserError>(AuthActionTypes.LogginUserError),
    tap((v) => console.log('LoggedAPI error', v.payload)),
    map((data) => {
      return {
        type: 'LOGIN_API_ERROR',
        payload: 'Email or password incorrect',
      };
    })
  );

  @Effect()
  LoginUser$: Observable<Action> = this.actions$.pipe(
    ofType<LogginUser>(AuthActionTypes.LogginUser),
    tap((v) => console.log('LoginUser effect', v.payload)),
    map(action => action.payload),
    exhaustMap(auth => {
      return this.authService.login(auth.user)
        .pipe(
          map(response => new LoggedUser(response)),
          catchError(error => of(new LogginUserError(error)))
        )
    })
  );

  @Effect({dispatch: false})
  LoggedUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoggedUser>(AuthActionTypes.LoggedUser),
    tap((v) => this.route.navigate(['/chats']))
  );
}
