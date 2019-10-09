import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementerComponent } from './incrementer.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incrementer component tests', () => {
  let component: IncrementerComponent;
  let fixture: ComponentFixture<IncrementerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementerComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(IncrementerComponent);
    component = fixture.componentInstance;
  });

  it('Should show the title', () => {
    const title = 'Hey';
    component.title = title;
    fixture.detectChanges();
    const h3 = fixture.debugElement.query(By.css('h3'));
    const elem: HTMLElement = h3.nativeElement;
    expect(elem.innerHTML).toContain(title);
  });

  it('should show the value in the input', async () => {
    component.changeValue(5);
    fixture.detectChanges();

    await fixture.whenStable();

    const input = fixture.debugElement.query(By.css('input'));
    const elem = input.nativeElement;
    expect(elem.value).toBe('55');
  });
  it('should increase/decrease by 5 with a click', () => {
    const [decreaser, increaser] = fixture.debugElement.queryAll(
      By.css('.btn-primary')
    );
    decreaser.triggerEventHandler('click', null);
    expect(component.progress).toBe(45);
    increaser.triggerEventHandler('click', null);
    expect(component.progress).toBe(50);
  });
  it('should show the progress in the title', () => {
    const h3 = fixture.debugElement.query(By.css('h3'));
    const elem: HTMLElement = h3.nativeElement;
    const decreaser = fixture.debugElement.query(By.css('.btn-primary'));
    decreaser.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(elem.innerHTML).toContain('45');
  });
});
