import { NgModule } from '@angular/core';
import { ActivationStart, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ActivityComponent } from './activity/activity.component';
import { authGuard } from './service/auth.guard';
import { ReloginComponent } from './login/relogin/relogin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ActivityDetailComponent } from './activity/activity-detail/activity-detail.component';
import { ActivityScheduleComponent } from './activity/activity-schedule/activity-schedule.component';
import { ActivityHistoryComponent } from './activity/activity-history/activity-history.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes: Routes = [
  { path:"", component:HomeComponent, data: { active: "home" },  canActivate:[authGuard] },
  { path:"login", component:LoginComponent},
  { path:"relogin", component:ReloginComponent},
  
  { path:"home", component:HomeComponent , data: { active: "home" },  canActivate:[authGuard]},

  { path:"activity", component:ActivityComponent , data: { active: "activity" },  canActivate:[authGuard]},
  { path:"activity/schedule", component:ActivityScheduleComponent , data: { active: "activity" },  canActivate:[authGuard]},
  { path:"activity/history", component:ActivityHistoryComponent , data: { active: "activity" },  canActivate:[authGuard]},
  { path:"activity/detail/:id", component:ActivityDetailComponent , data: { active: "activity" },  canActivate:[authGuard]},
 
  { path:"product", component:ProductComponent , data: { active: "product" },  canActivate:[authGuard]},
  { path:"product/detail/:id", component:ProductDetailComponent , data: { active: "product" },  canActivate:[authGuard]},


  { path: "**", component: NotfoundComponent, data: { active: "404" },  canActivate:[]  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true, scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
