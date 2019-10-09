import { DoctorsComponent } from './doctors.component';
import { DoctorService } from './doctor.service';
import { EMPTY, from, throwError } from 'rxjs';

describe('DoctorsComponent', () => {
  let component: DoctorsComponent;
  const service = new DoctorService(null);

  beforeEach(() => (component = new DoctorsComponent(service)));

  it('should load doctors on init', () => {
    spyOn(service, 'getDoctors').and.callFake(() => {
      return from(['doctor1', 'doctor2', 'doctor3']);
    });
    component.ngOnInit();
    expect(component.doctors.length).toBeGreaterThan(0);
  });
  it('should call the server to add a doctor', () => {
    const spy = spyOn(service, 'addDoctor').and.callFake(() => EMPTY);
    component.addDoctor();
    expect(spy).toHaveBeenCalled();
  });
  it('should add a doctor to doctors array', () => {
    const doctor = { id: 1, name: 'John' };
    spyOn(service, 'addDoctor').and.returnValue(from([doctor]));
    component.addDoctor();
    expect(component.doctors).toContain(doctor);
  });
  it('should have the property "errorMsg" being the service error when failing', () => {
    const myError = 'could not add doctor';
    spyOn(service, 'addDoctor').and.returnValue(throwError(myError));
    component.addDoctor();
    expect(component.errorMsg).toBe(myError);
  });
  it('should call the server to delete a doctor', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'deleteDoctor').and.returnValue(EMPTY);
    component.deleteDoctor('1');
    expect(spy).toHaveBeenCalledWith('1');
  });
  it('should call the server to delete a doctor', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'deleteDoctor').and.returnValue(EMPTY);
    component.deleteDoctor('1');
    expect(spy).not.toHaveBeenCalledWith('1');
  });
});
