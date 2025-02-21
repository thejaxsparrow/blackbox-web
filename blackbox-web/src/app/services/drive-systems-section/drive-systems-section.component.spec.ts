import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveSystemsSectionComponent } from './drive-systems-section.component';

describe('DriveSystemsSectionComponent', () => {
  let component: DriveSystemsSectionComponent;
  let fixture: ComponentFixture<DriveSystemsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriveSystemsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriveSystemsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
