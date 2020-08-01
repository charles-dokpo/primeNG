import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PlanningEffects } from './planning.effects';

describe('PlanningEffects', () => {
  let actions$: Observable<any>;
  let effects: PlanningEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlanningEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PlanningEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
