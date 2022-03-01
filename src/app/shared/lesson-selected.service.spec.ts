import { TestBed } from '@angular/core/testing';

import { LessonSelectedService } from './lesson-selected.service';

describe('LessonSelectedService', () => {
  let service: LessonSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
