import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  @Input() data;
  @Input() currentType;
  fields;

  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  getArrayDataFromJSON(json){
    //console.log(json)
    //return Object.keys(json).map(function(_) { return json[_]; });

    let data = [];
    for(let field of this.fields){
      data.push(json[field]);
    }
    return data;
  }

  getArrayFieldsFromJSON(json){
    this.fields = this.internalFieldsfilter(Object.keys(json));
    return this.fields

  }

  internalFieldsfilter(array){
    const fieldsToRemoveFromResponse = ["@id", "@type"];
    return array.filter(value => fieldsToRemoveFromResponse.indexOf(value) < 0)
  }

  deleteByID(id: number){
    this.delete.emit(id);
  }



}
