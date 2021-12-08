import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalsustainabilityComponent } from './environmentalsustainability.component';

describe('EnvironmentalsustainabilityComponent', () => {
  let component: EnvironmentalsustainabilityComponent;
  let fixture: ComponentFixture<EnvironmentalsustainabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentalsustainabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalsustainabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
