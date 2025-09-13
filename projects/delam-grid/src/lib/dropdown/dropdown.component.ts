import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { columnFilterInterface } from 'dlam-grid';

@Component({
  selector: 'app-dlam-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
@Input() colummnFilterList: columnFilterInterface[] = [];
  @Output() getInputFilteredList =  new EventEmitter();
  @Output() toggleDropdown = new EventEmitter();


  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    console.log(this.colummnFilterList);
  }

  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.toggleDropdown.emit("closed");
    }
  }

  getfilteredData(index: number): void {
    this.colummnFilterList[index].ischecked = !this.colummnFilterList[index].ischecked;
  }

  resetFilter() {
    const checkedColumnList = this.colummnFilterList.forEach(item => item.ischecked = false);
    this.getInputFilteredList.emit(checkedColumnList);
  }

  applyFilter() {
    const checkedColumnList = this.colummnFilterList.filter(item => item.ischecked)
    this.getInputFilteredList.emit(checkedColumnList);
  }
  

}
