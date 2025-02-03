import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessHomeComponent } from './process-home.component';

describe('ProcessHomeComponent', () => {
  let component: ProcessHomeComponent;
  let fixture: ComponentFixture<ProcessHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
