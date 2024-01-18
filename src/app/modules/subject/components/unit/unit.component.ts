import { Component, Input, OnInit } from '@angular/core';
import { ExerciseService } from '../../../../services/exercise.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
})
export class UnitComponent implements OnInit {
  @Input() unit: any;
  exercises: any;

  constructor(public exerciseService: ExerciseService) {}

  ngOnInit(): void {
    this.exerciseService.get(/*{page: 1}*/).subscribe((exercises): void => {
      this.exercises = exercises['hydra:member'].filter((exercise: any) => exercise.unit.split('/')[3] === this.unit.id.toString());
    });
  }
}
