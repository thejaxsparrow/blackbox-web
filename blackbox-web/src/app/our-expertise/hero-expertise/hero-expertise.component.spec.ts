import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroExpertiseComponent } from './hero-expertise.component';

describe('HeroExpertiseComponent', () => {
  let component: HeroExpertiseComponent;
  let fixture: ComponentFixture<HeroExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroExpertiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
