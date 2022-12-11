import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcomComponent } from './agregarcom.component';

describe('AgregarcomComponent', () => {
  let component: AgregarcomComponent;
  let fixture: ComponentFixture<AgregarcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
