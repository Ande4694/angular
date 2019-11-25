import { FilterLift } from './find-a-lift/lift.filter';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ErikComponent } from './erik/erik.component';
import { LasseComponent } from './lasse/lasse.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PortalComponent } from './portal/portal.component';
import { FindALiftComponent } from './find-a-lift/find-a-lift.component';
import { RegisterTripComponent } from './register-trip/register-trip.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import {MatCardModule} from '@angular/material/card';
import { TripComponent } from './trip/trip.component';
import { AppState } from './redux/store';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { rootReducer } from './redux/store'; // Added this to get the root reducer
import { DevToolsExtension } from '@angular-redux/store';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    PageNotFoundComponent,
    ErikComponent,
    LasseComponent,
    HomeComponent,
    RegisterComponent,
    PortalComponent,
    FindALiftComponent,
    RegisterTripComponent,
    UserAdminComponent,
    TripComponent,
    FilterLift
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, MatCardModule,
    ReactiveFormsModule,
    NgReduxModule,
    FormsModule,
    NgReduxRouterModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>,
              private devTool: DevToolsExtension,
              private ngReduxRouter: NgReduxRouter) {

              this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);

    ngReduxRouter.initialize(/* args */);
  }
 }
