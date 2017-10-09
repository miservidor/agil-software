import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NourlComponent } from './nourl.component';

describe('NourlComponent', () => {
  let component: NourlComponent;
  let fixture: ComponentFixture<NourlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NourlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NourlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
