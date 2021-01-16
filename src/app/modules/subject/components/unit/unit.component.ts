import {Component, Input, OnInit} from '@angular/core';
import {ExerciseService} from "../../../../services/exercise.service";

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.sass']
})
export class UnitComponent implements OnInit {

  @Input() unit;
  exercises;

  constructor(
    public exerciseService: ExerciseService
  ) { }

  ngOnInit(): void {
    this.exerciseService.get({page: 1}).subscribe(exercises => {
      this.exercises = exercises['hydra:member'].filter(exercise => exercise.unitId.split("/")[5] == this.unit.id);
    });

  }

}
