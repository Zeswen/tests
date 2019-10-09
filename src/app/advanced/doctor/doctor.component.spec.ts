import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DoctorComponent } from './doctor.component';
import { DoctorService } from './doctor.service';
import { HttpClientModule } from '@angular/common/http';

describe('Doctor component tests', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorComponent],
      providers: [DoctorService],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return the doctors name', () => {
    const name = 'John';
    const res = component.greetDoctor(name);
    expect(res).toContain(name);
  });
});
