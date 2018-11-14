import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { SecureComponent } from './shared/layout/secure/secure.component';
import { PublicComponent } from './shared/layout/public/public.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthenticateGuard } from './auth/guards/authenticate.guard';

export const PUBLIC_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
];

export const SECURE_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
];

const routes: Routes = [
  { path: '', component: PublicComponent, canActivate: [], children: PUBLIC_ROUTES },
  { path: '', component: SecureComponent, canActivate: [AuthenticateGuard], children: SECURE_ROUTES }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
