import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SismainComponent } from './sismain.component';

describe('SismainComponent', () => {
  let component: SismainComponent;
  let fixture: ComponentFixture<SismainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SismainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SismainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
