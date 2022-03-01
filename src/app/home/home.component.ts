import { Component, OnInit } from '@angular/core';
import { Lesson, LessonService } from '../shared';
import { LessonSelectedService } from '../shared/lesson-selected.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  lessons: Lesson[] = [];
  lesson?: Lesson;
  
  constructor(
    private readonly lessonService: LessonService,
    private lessonSelectService: LessonSelectedService
  ) { }

  ngOnInit(): void {
    this.lessons = this.lessonService.findAllLessons();
    this.lessonSelectService.selected$.subscribe( lesson => this.selectLesson(lesson));
    // this.lessonService.findAllLessons().pipe(
    //   tap(console.log)
    // ).subscribe( lessons => this.lessons = lessons);
  }

  selectLesson(lesson: any) {
    console.log(lesson)
    this.lesson = lesson;
  }

}
