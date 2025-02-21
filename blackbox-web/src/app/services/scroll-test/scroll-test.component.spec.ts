import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTestComponent } from './scroll-test.component';

describe('ScrollTestComponent', () => {
  let component: ScrollTestComponent;
  let fixture: ComponentFixture<ScrollTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
