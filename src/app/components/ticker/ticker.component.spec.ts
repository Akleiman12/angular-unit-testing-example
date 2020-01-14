import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerComponent } from './ticker.component';

describe('TickerComponent', () => {
  let component: TickerComponent;
  let fixture: ComponentFixture<TickerComponent>;
  let nativeElement: HTMLElement;

  function tickWithTemplate() {
    const button = nativeElement.querySelector('input');
    button.click();
    fixture.detectChanges();
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should tick in component logic', () => {
    expect(component.ticks).toEqual(0);
    component.tick();
    expect(component.ticks).toEqual(1);
  });

  it('should tick in component template', () => {
    const ticksElement = nativeElement.querySelector('h3');
    expect(ticksElement.textContent).toContain('0 ticks');
    tickWithTemplate();
    console.log('ticksElement', ticksElement);
    expect(ticksElement.textContent).toContain('1 ticks');
  });

});
