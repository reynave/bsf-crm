import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ActivityComponent } from './activity/activity.component';
import { authGuard } from './service/auth.guard';
import { ReloginComponent } from './login/relogin/relogin.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path:"", component:HomeComponent, data: { active: "home" },  canActivate:[authGuard] },
  { path:"login", component:LoginComponent},
  { path:"relogin", component:ReloginComponent},
  
  { path:"home", component:HomeComponent , data: { active: "home" },  canActivate:[authGuard]},
  { path:"activity", component:ActivityComponent , data: { active: "home" },  canActivate:[authGuard]},
  { path: "**", component: NotfoundComponent, data: { active: "404" },  canActivate:[]  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
