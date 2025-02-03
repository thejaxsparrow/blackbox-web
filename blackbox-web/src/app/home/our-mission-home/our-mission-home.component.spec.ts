import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMissionHomeComponent } from './our-mission-home.component';

describe('OurMissionHomeComponent', () => {
  let component: OurMissionHomeComponent;
  let fixture: ComponentFixture<OurMissionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurMissionHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurMissionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
