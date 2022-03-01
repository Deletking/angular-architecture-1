import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lesson, LessonSelectedService } from '../shared';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit {
  @Input() lessons?: Lesson[];

  constructor(private lessonSelectedService: LessonSelectedService) { }

  ngOnInit(): void {
  }

  selectLesson(lesson: Lesson) {  
   this.lessonSelectedService.select(lesson); 
  }

}
