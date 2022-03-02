import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Subject } from 'rxjs';
import { Lesson } from '.';

@Injectable({
  providedIn: 'root'
})
export class LessonSelectedService {
  private _selected = new Subject<Lesson>();

  public selected$ = this._selected.asObservable().pipe(filter(lesson => !!lesson));


  select(lesson: Lesson) {
    this._selected.next(lesson);
  }

}
