import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodcrrestsComponent } from './woodcrrests.component';

describe('WoodcrrestsComponent', () => {
  let component: WoodcrrestsComponent;
  let fixture: ComponentFixture<WoodcrrestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodcrrestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodcrrestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
