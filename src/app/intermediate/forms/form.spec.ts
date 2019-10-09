import { FormBuilder } from '@angular/forms';
import { RegisterForm } from './form';

describe('Form tests', () => {
  let component: RegisterForm;
  beforeEach(() => {
    component = new RegisterForm(new FormBuilder());
  });
  it('should create a form with two fields', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });
  it('should have an email', () => {
    const control = component.form.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should have a valid email', () => {
    const control = component.form.get('email');
    control.setValue('zeswen@gmail.com');
    expect(control.valid).toBeTruthy();
  });
});
