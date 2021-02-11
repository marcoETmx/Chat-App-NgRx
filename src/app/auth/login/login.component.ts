import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as userActions from '../Actions/auth.actions';
import * as fromAuth from '../../reducers/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
    this.store.dispatch(new userActions.GetUser());
    this.user = this.store.pipe(select(fromAuth.getAuth));
  }

  googleLogin() {
    this.store.dispatch(new userActions.GoogleLogin());
  }

  logout() {
    this.store.dispatch(new userActions.Logout());
  }
}
