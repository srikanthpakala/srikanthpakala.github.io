import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeredveneersComponent } from './engineeredveneers.component';

describe('EngineeredveneersComponent', () => {
  let component: EngineeredveneersComponent;
  let fixture: ComponentFixture<EngineeredveneersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeredveneersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeredveneersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
