import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: []
})
export class DoctorComponent implements OnInit {
  doctors: any[] = [];
  constructor(public doctorService: DoctorService) {}

  ngOnInit() {}

  greetDoctor(name: string) {
    return `Hey ${name}`;
  }

  getDoctors() {
    this.doctorService
      .getDoctors()
      .subscribe((doctors: any[]) => (this.doctors = doctors));
  }
}
