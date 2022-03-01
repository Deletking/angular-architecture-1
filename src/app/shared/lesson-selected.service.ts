import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Lesson } from '.';

@Injectable({
  providedIn: 'root'
})
export class LessonSelectedService {
  private _selected = new BehaviorSubject<Lesson | null>(null);

  public selected$ = this._selected.asObservable().pipe(filter(lesson => !!lesson));


  select(lesson: Lesson) {
    this._selected.next(lesson);
  }

}
