import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { DoctorRouterComponent } from './doctor-router.component';
import { Observable, EMPTY, Subject } from 'rxjs';

class FakeRouter {
  navigate(params) {}
}

class FakeActivatedRouter {
  // params: Observable<any> = EMPTY;
  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('DoctorRouterComponent', () => {
  let component: DoctorRouterComponent;
  let fixture: ComponentFixture<DoctorRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorRouterComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRouter }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect to doctor when saving', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.saveDoctor();
    expect(spy).toHaveBeenCalledWith(['doctor', '123']);
  });

  it('should set the id to new', () => {
    component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRouter = TestBed.get(ActivatedRoute);
    activatedRoute.push({ _id: 'new' });
    expect(component._id).toBe('new');
  });
});
