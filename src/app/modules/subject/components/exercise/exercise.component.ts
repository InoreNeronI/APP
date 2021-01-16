import {Component, Input, OnInit} from '@angular/core';

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
    if(isNaN(this.exercise.answer)){
      this.type="text";
    }else{
      this.type="number";
    }
  }

  checkResponse(event){
    if(event.srcElement.value == this.exercise.answer){
      this.resp = true;
    }else{
      this.resp = false;
    }

  }

}
