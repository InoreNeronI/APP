import {Component, Input, OnInit} from '@angular/core';
import {ExerciseService} from "../../services/exercise.service";

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
    this.exerciseService.getExercises({page: 1}).subscribe(exercises => {
      console.log("exercises");
      console.log(exercises)


      this.exercises = exercises['hydra:member'].filter(exercise => exercise.unitId.split("/")[5] == this.unit.id);
    });

  }

}
