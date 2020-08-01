import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanningCreatedComponent } from './list-planning-created.component';

describe('ListPlanningCreatedComponent', () => {
  let component: ListPlanningCreatedComponent;
  let fixture: ComponentFixture<ListPlanningCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlanningCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanningCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
