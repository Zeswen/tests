import { ROUTES } from './app.routes';
import { DoctorComponent } from '../../advanced/doctor/doctor.component';

describe('Main routes', () => {
  it('should contain the /doctor/_id route', () => {
    expect(ROUTES).toContain({
      path: 'doctor/:_id',
      component: DoctorComponent
    });
  });
});
