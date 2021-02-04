import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './Reducers/auth.reducer'
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './Effects/auth.effects';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', fromAuth.AuthReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
