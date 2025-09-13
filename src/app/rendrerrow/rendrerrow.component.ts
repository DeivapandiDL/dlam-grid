import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rendrerrow',
  imports: [],
  templateUrl: './rendrerrow.component.html',
  styleUrl: './rendrerrow.component.scss'
})
export class RendrerrowComponent {
@Input() childRowInput!: any;

  ngOnChanges(){
    console.log(this.childRowInput);
  }
}
