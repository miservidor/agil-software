import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SismenulatComponent } from './sismenulat.component';

describe('SismenulatComponent', () => {
  let component: SismenulatComponent;
  let fixture: ComponentFixture<SismenulatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SismenulatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SismenulatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
