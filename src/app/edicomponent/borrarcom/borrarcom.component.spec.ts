import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarcomComponent } from './borrarcom.component';

describe('BorrarcomComponent', () => {
  let component: BorrarcomComponent;
  let fixture: ComponentFixture<BorrarcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
