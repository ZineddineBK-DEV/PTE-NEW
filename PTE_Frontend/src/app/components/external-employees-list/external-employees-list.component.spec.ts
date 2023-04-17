import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalEmployeesListComponent } from './external-employees-list.component';

describe('ExternalEmployeesListComponent', () => {
  let component: ExternalEmployeesListComponent;
  let fixture: ComponentFixture<ExternalEmployeesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalEmployeesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalEmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
