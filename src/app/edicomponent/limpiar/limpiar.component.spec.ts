import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiarComponent } from './limpiar.component';

describe('LimpiarComponent', () => {
  let component: LimpiarComponent;
  let fixture: ComponentFixture<LimpiarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimpiarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimpiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
