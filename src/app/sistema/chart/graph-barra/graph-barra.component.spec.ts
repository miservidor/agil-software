import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphBarraComponent } from './graph-barra.component';

describe('GraphBarraComponent', () => {
  let component: GraphBarraComponent;
  let fixture: ComponentFixture<GraphBarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphBarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
