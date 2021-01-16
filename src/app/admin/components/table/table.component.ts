import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

  getArrayDataFromJSON(json){
    return Object.keys(json).map(function(_) { return json[_]; })
  }

  getArrayFieldsFromJSON(json){
    let keyNames = Object.keys(json);
    console.log(keyNames);

    return keyNames;

  }

  internalFieldsfilter(array){

  }



}
