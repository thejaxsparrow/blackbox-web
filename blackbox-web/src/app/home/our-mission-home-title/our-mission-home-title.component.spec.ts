import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMissionHomeTitleComponent } from './our-mission-home-title.component';

describe('OurMissionHomeTitleComponent', () => {
  let component: OurMissionHomeTitleComponent;
  let fixture: ComponentFixture<OurMissionHomeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurMissionHomeTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurMissionHomeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
