import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-renderercolumn',
  imports: [],
  templateUrl: './renderercolumn.component.html',
  styleUrl: './renderercolumn.component.scss'
})
export class RenderercolumnComponent {
@Input() childRowInput!: any;
@Input() columnName!: string;

  @Output() clicked = new EventEmitter<string>();

  notify() {
    this.clicked.emit(`Hello test ${this.columnName}`);
  }

  // ngOnInit(){
  //   console.log("asdfasdfasdf");
  //   console.log(this.childRowInput)
  // }

  ngOnChanges(changes: SimpleChanges){
    // console.log(this.childRowInput);
    // console.log(this.columnName);
  }

}

