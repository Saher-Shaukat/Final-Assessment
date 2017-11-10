import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {AuthenticationService} from './authentication.service';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes=[
  { path: 'Home', component: HomeComponent},
  { path: 'Signup', component: SignupComponent},
  { path: 'Login', component: LoginComponent},
  {path: 'Shows', component: SeriesComponent},
  {path: 'Movies', component: MoviesComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full'}
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
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
