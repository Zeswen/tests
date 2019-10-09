import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-router',
  templateUrl: './doctor-router.component.html',
  styles: []
})
export class DoctorRouterComponent implements OnInit {
  _id: string;
  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => (this._id = params._id));
  }

  saveDoctor() {
    this.router.navigate(['doctor', '123']);
  }
}
