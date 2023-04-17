import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceRommsComponent } from './conference-romms.component';

describe('ConferenceRommsComponent', () => {
  let component: ConferenceRommsComponent;
  let fixture: ComponentFixture<ConferenceRommsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceRommsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferenceRommsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
