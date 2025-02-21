import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteMarqueeComponent } from './white-marquee.component';

describe('WhiteMarqueeComponent', () => {
  let component: WhiteMarqueeComponent;
  let fixture: ComponentFixture<WhiteMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteMarqueeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
