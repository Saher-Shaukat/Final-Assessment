import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {AuthenticationService} from './authentication.service';

import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { EditComponent } from './edit/edit.component';
import { SeasonComponent } from './season/season.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("713968293746-gujmfceplcphvoc32s18i3bd2fb4esc8.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1990940294453669")
  }
]);
export function provideConfig() {
  return config;
}
const routes: Routes=[
  { path: 'Home', component: HomeComponent},
  { path: 'Signup', component: SignupComponent},
  { path: 'Login', component: LoginComponent},
  {path: 'Shows', component: SeriesComponent},
  {path: 'Movies', component: MoviesComponent},
  {path: 'Edit', component: EditComponent},
  { path: '', redirectTo: 'Signup', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SeriesComponent,
    MoviesComponent,
    EditComponent,
    SeasonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,SocialLoginModule,
    HttpModule
  ],
  providers: [AuthenticationService, {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
