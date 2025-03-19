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
import { ProductListComponent } from './product/product-list/product-list.component';
import { ScheduleActivitiesComponent } from './schedule-activities/schedule-activities.component';
import { ActivityInsertComponent } from './activity/activity-insert/activity-insert.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CustomerModalComponent } from './modal/customer-modal/customer-modal.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { SqlQueryComponent } from './sql-query/sql-query.component';
import { CustomerInsertComponent } from './customer/customer-insert/customer-insert.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { CartsComponent } from './carts/carts.component';
import { CartsDetailComponent } from './carts/carts-detail/carts-detail.component';
import { NgxWebcamComponent } from './global/ngx-webcam/ngx-webcam.component';
import { TargetComponent } from './target/target.component';
import { TargetYearComponent } from './target/target-year/target-year.component';
import { TargetMonthComponent } from './target/target-month/target-month.component';
import { KomisiComponent } from './komisi/komisi.component';
import { ReportCustomerComponent } from './report-customer/report-customer.component';
import { ApprovalComponent } from './approval/approval.component';
import { ApprovalArDueComponent } from './approval/approval-ar-due/approval-ar-due.component';
import { ApprovalCreditLimitComponent } from './approval/approval-credit-limit/approval-credit-limit.component';
import { ApprovalDiscountComponent } from './approval/approval-discount/approval-discount.component';
import { ApprovalTopComponent } from './approval/approval-top/approval-top.component';
import { ApprovalArDueDetailComponent } from './approval/approval-ar-due/approval-ar-due-detail/approval-ar-due-detail.component';
import { ApprovalTopDetailComponent } from './approval/approval-top/approval-top-detail/approval-top-detail.component';
import { ApprovalDiscountDetailComponent } from './approval/approval-discount/approval-discount-detail/approval-discount-detail.component';
import { ApprovalCreditLimitDetailComponent } from './approval/approval-credit-limit/approval-credit-limit-detail/approval-credit-limit-detail.component';

const routes: Routes = [
  { path:"", component:HomeComponent, data: { active: "home" },  canActivate:[authGuard] },
  { path:"login", component:LoginComponent},
  { path:"relogin", component:ReloginComponent},
  
  { path:"home", component:HomeComponent , data: { active: "home" },  canActivate:[authGuard]},
  { path:"ngxWebcam", component:NgxWebcamComponent , data: { active: "Camera Webcam" },  canActivate:[authGuard]},

  { path:"scheduleAcivities", component:ScheduleActivitiesComponent , data: { active: "scheduleAcivities" },  canActivate:[authGuard]},
  
  { path:"activity", component:ActivityComponent , data: { active: "activity" },  canActivate:[authGuard]}, 
  { path:"activity/insert", component:ActivityInsertComponent , data: { active: "activity" },  canActivate:[authGuard]},
 
  { path:"activity/schedule", component:ActivityScheduleComponent , data: { active: "activity" },  canActivate:[authGuard]},
  { path:"activity/history", component:ActivityHistoryComponent , data: { active: "activity" },  canActivate:[authGuard]},
  { path:"activity/detail/:id", component:ActivityDetailComponent , data: { active: "activity" },  canActivate:[authGuard]},
 
  { path:"product", component:ProductComponent , data: { active: "product" },  canActivate:[authGuard]},
  { path:"product/list", component:ProductListComponent , data: { active: "product" },  canActivate:[authGuard]},
  { path:"product/detail", component:ProductDetailComponent , data: { active: "product" },  canActivate:[authGuard]},

  { path:"modal/customer", component:CustomerModalComponent , data: { active: "customer" },  canActivate:[authGuard]},
 
  { path:"customer", component:CustomerComponent , data: { active: "customer" },  canActivate:[authGuard]},
  { path:"customer/detail", component:CustomerDetailComponent , data: { active: "customer" },  canActivate:[authGuard]},
  { path:"customer/insert", component:CustomerInsertComponent , data: { active: "customer" },  canActivate:[authGuard]},

  { path:"carts", component:CartsComponent , data: { active: "cart" },  canActivate:[authGuard]},
  { path:"cart", component:CartsComponent , data: { active: "cart" },  canActivate:[authGuard]},
  
  { path:"carts/detail", component:CartsDetailComponent , data: { active: "cart" },  canActivate:[authGuard]},
 
  //{ path:"cart", component:CartComponent , data: { active: "cart" },  canActivate:[authGuard]},
  
  { path:"order", component:OrderComponent , data: { active: "order" },  canActivate:[authGuard]},
  { path:"order/detail", component:OrderDetailComponent , data: { active: "order" },  canActivate:[authGuard]},

  { path:"target", component:TargetComponent , data: { active: "target" },  canActivate:[authGuard]},
  { path:"target/yearly", component:TargetYearComponent , data: { active: "target" },  canActivate:[authGuard]},
  { path:"target/montly", component:TargetMonthComponent , data: { active: "target" },  canActivate:[authGuard]},
  
  { path:"komisi", component:KomisiComponent , data: { active: "komisi" },  canActivate:[authGuard]},

  { path:"reportCustomer", component:ReportCustomerComponent , data: { active: "reportCustomer" },  canActivate:[authGuard]},

  { path:"approval", component:ApprovalComponent , data: { active: "approval" },  canActivate:[authGuard]},

  { path:"approval/arDue", component:ApprovalArDueComponent , data: { active: "approval" },  canActivate:[authGuard]},
  { path:"approval/creditLimit", component:ApprovalCreditLimitComponent , data: { active: "approval" },  canActivate:[authGuard]},
  { path:"approval/discount", component:ApprovalDiscountComponent , data: { active: "approval" },  canActivate:[authGuard]},
  { path:"approval/top", component:ApprovalTopComponent , data: { active: "approval" },  canActivate:[authGuard]},

  { path:"approval/arDue/detail", component:ApprovalArDueDetailComponent , data: { active: "approval" },  canActivate:[authGuard]},
  { path:"approval/creditLimit/detail", component:ApprovalCreditLimitDetailComponent , data: { active: "approval" },  canActivate:[authGuard]},
  { path:"approval/discount/detail", component:ApprovalDiscountDetailComponent , data: { active: "approval" },  canActivate:[authGuard]},
  { path:"approval/top/detail", component:ApprovalTopDetailComponent , data: { active: "approval" },  canActivate:[authGuard]},
 

  { path:"sql", component:SqlQueryComponent , data: { active: "sql" },  canActivate:[authGuard]},

  { path: "**", component: NotfoundComponent, data: { active: "404" },  canActivate:[]  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true, scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
