import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedHardwareComponent } from './featured-hardware.component';

describe('FeaturedHardwareComponent', () => {
  let component: FeaturedHardwareComponent;
  let fixture: ComponentFixture<FeaturedHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
