import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareEvaluationComponent } from './hardware-evaluation.component';

describe('HardwareEvaluationComponent', () => {
  let component: HardwareEvaluationComponent;
  let fixture: ComponentFixture<HardwareEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
