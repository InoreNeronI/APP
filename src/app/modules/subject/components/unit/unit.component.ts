import { Component, Input, OnInit } from '@angular/core';
import { ExerciseService } from '../../../../services/exercise.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
})
export class UnitComponent implements OnInit {
  @Input() unit;
  exercises;

  constructor(public exerciseService: ExerciseService) {}

  ngOnInit(): void {
    this.exerciseService.get(/*{page: 1}*/).subscribe((exercises) => {
      this.exercises = exercises['hydra:member'].filter(
        (exercise) => exercise.unit.split('/')[3] === this.unit.id.toString(),
      );
    });
  }
}
