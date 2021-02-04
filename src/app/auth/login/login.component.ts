import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from '../services/auth.service';
import { Store, select } from '@ngrx/store'
import * as Auth from '../Actions/auth.actions'
import * as fromAuth from '../../reducers/reducers'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user: IUser
  error$ = this.store.select(fromAuth.getAuthError)
  isLoading$ = this.store.select(fromAuth.getAuthLoding)

  constructor(private store: Store<fromAuth.State>) {

  }

  ngOnInit(): void {
  }

  login(){
    this.store.dispatch(new Auth.LoggedUser({user: this.user}))
  }

}
