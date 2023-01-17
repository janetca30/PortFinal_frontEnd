import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCompComponent } from './registro-comp.component';

describe('RegistroCompComponent', () => {
  let component: RegistroCompComponent;
  let fixture: ComponentFixture<RegistroCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
