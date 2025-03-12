import { NgModule, CUSTOM_ELEMENTS_SCHEMA, isDevMode  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';

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
import { SqlQueryComponent } from './sql-query/sql-query.component';
import { CustomerInsertComponent } from './customer/customer-insert/customer-insert.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component'; 
import { CartsComponent } from './carts/carts.component';
import { CartsDetailComponent } from './carts/carts-detail/carts-detail.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgxWebcamComponent } from './global/ngx-webcam/ngx-webcam.component';
import { AddHoursPipe } from './pipe/add-hours.pipe';
import { TargetComponent } from './target/target.component';
import { KomisiComponent } from './komisi/komisi.component';
import { TargetMonthComponent } from './target/target-month/target-month.component';
import { TargetYearComponent } from './target/target-year/target-year.component';

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
    AddHoursPipe,
    ScheduleActivitiesComponent, ActivityInsertComponent, CartComponent, OrderComponent, CustomerModalComponent, CustomerComponent, CustomerDetailComponent, SqlQueryComponent, CustomerInsertComponent, OrderDetailComponent, CartsComponent, CartsDetailComponent, NgxWebcamComponent, TargetComponent, KomisiComponent, TargetMonthComponent, TargetYearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    WebcamModule,
    DataTablesModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
