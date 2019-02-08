import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomemodelComponent } from './somemodel.component';

describe('SomemodelComponent', () => {
  let component: SomemodelComponent;
  let fixture: ComponentFixture<SomemodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomemodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
