import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamorganizationalChartComponent } from './teamorganizational-chart.component';

describe('TeamorganizationalChartComponent', () => {
  let component: TeamorganizationalChartComponent;
  let fixture: ComponentFixture<TeamorganizationalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamorganizationalChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamorganizationalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
