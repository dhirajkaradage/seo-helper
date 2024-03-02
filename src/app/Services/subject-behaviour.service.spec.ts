import { TestBed } from '@angular/core/testing';

import { SubjectBehaviourService } from './subject-behaviour.service';

describe('SubjectBehaviourService', () => {
  let service: SubjectBehaviourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectBehaviourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
