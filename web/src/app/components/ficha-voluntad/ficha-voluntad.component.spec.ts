import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaVoluntadComponent } from './ficha-voluntad.component';

describe('FichaVoluntadComponent', () => {
  let component: FichaVoluntadComponent;
  let fixture: ComponentFixture<FichaVoluntadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaVoluntadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaVoluntadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
