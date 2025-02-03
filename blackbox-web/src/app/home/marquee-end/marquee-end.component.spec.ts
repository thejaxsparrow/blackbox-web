import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeEndComponent } from './marquee-end.component';

describe('MarqueeEndComponent', () => {
  let component: MarqueeEndComponent;
  let fixture: ComponentFixture<MarqueeEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueeEndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueeEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
