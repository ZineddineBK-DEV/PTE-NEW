import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironementLabsComponent } from './environement-labs.component';

describe('EnvironementLabsComponent', () => {
  let component: EnvironementLabsComponent;
  let fixture: ComponentFixture<EnvironementLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironementLabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironementLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
