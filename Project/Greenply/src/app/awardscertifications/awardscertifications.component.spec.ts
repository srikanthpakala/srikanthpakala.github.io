import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardscertificationsComponent } from './awardscertifications.component';

describe('AwardscertificationsComponent', () => {
  let component: AwardscertificationsComponent;
  let fixture: ComponentFixture<AwardscertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardscertificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardscertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
