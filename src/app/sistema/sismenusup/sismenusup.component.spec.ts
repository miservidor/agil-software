import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SismenusupComponent } from './sismenusup.component';

describe('SismenusupComponent', () => {
  let component: SismenusupComponent;
  let fixture: ComponentFixture<SismenusupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SismenusupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SismenusupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
