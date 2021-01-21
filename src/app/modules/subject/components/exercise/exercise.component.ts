import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.sass']
})

export class ExerciseComponent implements OnInit {
  @Input() exercise;
  type;
  resp;

  constructor() { }

  ngOnInit(): void {
    this.type = isNaN(this.exercise.answer) ? 'text' : 'number';
  }

  checkResponse(event) {
    this.resp = event.target.value === this.exercise.answer;
  }
}
