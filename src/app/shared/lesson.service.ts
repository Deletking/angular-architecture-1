import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Lesson } from './index';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private readonly urlApi = ''

  constructor(private http: HttpClient) { }

  // findAllLessons(): Observable<Lesson[]> {
  //   return this.http.get<Lesson[]>(`${this.urlApi}/`);
  // }

  findAllLessons(): Lesson[] {
    const lessons: Lesson[] = [
      {
        title: 'teste 1 teste 1 teste 1 teste 1 teste 1 teste 1 teste 1 teste 1',
        duration: '2:50'
      },
      {
        title: 'teste 2 teste 2 teste 2 teste 2 teste 2 ',
        duration: '5:38'
      }
    ]
    return lessons;
  }
}
