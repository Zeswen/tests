import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './intermediate/spies/doctors.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorComponent } from './advanced/doctor/doctor.component';
import { HospitalComponent } from './advanced/hospital/hospital.component';
import { IncrementerComponent } from './advanced/incrementer/incrementer.component';
import { NavbarComponent } from './expert/navbar/navbar.component';
import { DoctorRouterComponent } from './expert/doctor-router/doctor-router.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorComponent,
    HospitalComponent,
    IncrementerComponent,
    NavbarComponent,
    DoctorRouterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
