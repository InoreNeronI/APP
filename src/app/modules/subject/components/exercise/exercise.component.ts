import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
})
export class ExerciseComponent implements OnInit {
  @Input() exercise: any;
  type: string;
  resp: boolean;

  constructor() {}

  ngOnInit(): void {
    this.type = isNaN(this.exercise.answer) ? 'text' : 'number';
  }

  checkResponse(event: any): void {
    this.resp = event.target.value === this.exercise.answer;
  }
}
