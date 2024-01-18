import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  standalone: true,
  imports: [NgIf, NgClass, TranslateModule],
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
