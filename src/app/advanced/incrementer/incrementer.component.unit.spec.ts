import { IncrementerComponent } from './incrementer.component';
import { ElementRef } from '@angular/core';

describe('Incrementer component unit tests', () => {
  let component: IncrementerComponent;
  beforeEach(() => (component = new IncrementerComponent()));
  it('should have a numerical progress', () => {
    component.progress = 50;
    expect(component.progress).toBe(50);
  });
});
