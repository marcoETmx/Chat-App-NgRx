import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ngrx Modules
import { StoreModule } from '@ngrx/store'
import { EffectsModule} from '@ngrx/effects'
import { StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store'
import { StoreDevtools, StoreDevtoolsModule} from '@ngrx/store-devtools'
import { reducers, metaReducers } from './reducers/reducers';
import { environment } from 'src/environments/environment';

const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, {metaReducers}),
  StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name: 'AngularChatNgrx',
    logOnly: environment.production,
    maxAge: 25
  })
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...NGRX_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
