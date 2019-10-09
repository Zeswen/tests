import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctors',
  template: `
    <p>
      doctors works!
    </p>
  `,
  styles: []
})
export class DoctorsComponent implements OnInit {
  public doctors: any[] = [];
  public errorMsg: string;

  constructor(public doctorService: DoctorService) {}

  ngOnInit() {
    this.doctorService
      .getDoctors()
      .subscribe(doctors => (this.doctors = doctors));
  }

  addDoctor() {
    const doctor = { name: 'Médico Juan Carlos' };

    this.doctorService
      .addDoctor(doctor)
      .subscribe(
        doctorDB => this.doctors.push(doctorDB),
        err => (this.errorMsg = err)
      );
  }

  deleteDoctor(id: string) {
    const confirmar = confirm('Estas seguro que desea borrar este médico');

    if (confirmar) {
      this.doctorService.deleteDoctor(id);
    }
  }
}
