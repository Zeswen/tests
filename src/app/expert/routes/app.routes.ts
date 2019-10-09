import { Routes } from '@angular/router';
import { HospitalComponent } from '../../advanced/hospital/hospital.component';
import { DoctorComponent } from '../../advanced/doctor/doctor.component';
import { IncrementerComponent } from '../../advanced/incrementer/incrementer.component';

export const ROUTES: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'doctor/:_id', component: DoctorComponent },
  { path: '**', component: IncrementerComponent }
];
