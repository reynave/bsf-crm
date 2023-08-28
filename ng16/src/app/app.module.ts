import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './global/header/header.component';
import { ReloginComponent } from './login/relogin/relogin.component';
import { ActivityDetailComponent } from './activity/activity-detail/activity-detail.component';
import { ActivityScheduleComponent } from './activity/activity-schedule/activity-schedule.component';
import { HeaderBackComponent } from './global/header-back/header-back.component';
import { ActivityHistoryComponent } from './activity/activity-history/activity-history.component';
import { SafePipe } from './service/safe.pipe';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { DataTablesModule } from 'angular-datatables'; 
import { ScheduleActivitiesComponent } from './schedule-activities/schedule-activities.component';
import { ActivityInsertComponent } from './activity/activity-insert/activity-insert.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CustomerModalComponent } from './modal/customer-modal/customer-modal.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ActivityComponent,
    NotfoundComponent,
    HeaderComponent,
    ReloginComponent,
    ActivityDetailComponent,
    ActivityScheduleComponent,
    HeaderBackComponent,
    ActivityHistoryComponent,
    SafePipe,
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent, 
    ScheduleActivitiesComponent, ActivityInsertComponent, CartComponent, OrderComponent, CustomerModalComponent, CustomerComponent, CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    DataTablesModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
