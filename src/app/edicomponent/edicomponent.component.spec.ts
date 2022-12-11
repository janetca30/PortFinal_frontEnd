import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicomponentComponent } from './edicomponent.component';

describe('EdicomponentComponent', () => {
  let component: EdicomponentComponent;
  let fixture: ComponentFixture<EdicomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
