import { Component, Input, HostListener, } from '@angular/core';
import { DynamiccomponentComponent } from './dynamiccomponent/dynamiccomponent.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DlamTableHeaderInterface, TableRow } from './delam-table.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-delam-grid',
  imports: [NgClass, DynamiccomponentComponent, DropdownComponent],
  templateUrl: './delam-grid.component.html',
  styleUrl: './delam-grid.component.scss'
})
export class DelamGridComponent {

  
  @Input() tableHeader: DlamTableHeaderInterface[] = [];
  tableDataList: TableRow[] = [];
  paginatedTableList: TableRow[] = [];
  @Input() tableData: TableRow[] = [];
  dropdownIndex: number = -1;
  filterObject:  any = {};
  draggedCell: number = -1;
  headerCell:string[] = [];
  sortType:string = "";
  colSortName: string = "";
  tableWidth: number = 0;
  ngOnInit() {
    this.headerCell = this.tableHeader.map(item => item.keyName);
    this.tableDataList = this.getFilteredDataList([], this.filterKeyName);
    this.paginatedDataList()
    this.tableHeader.forEach(item =>{
      if(item.isFilterEnabled){
        this.filterObject[item.keyName] = [];
      }
      this.tableWidth += item.width ? item.width : 200
    });
    this.getColumnFilterList();
    this.calculateTotalPages()
  }

  getColumnFilterList() {
    Object.keys(this.filterObject).forEach(key =>{
      this.filterObject[key] = this.tableData.map(item => {
         return {keyName:item[key],ischecked: false}
      }
      );
    })
    console.log(this.filterObject);
  }

  onDragStart(event: DragEvent, colIndex: number): void {
    this.draggedCell =  colIndex
    event.dataTransfer?.setData('text/plain', ''); 
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent, targetCol: number): void {
    event.preventDefault();
    if (this.draggedCell > -1) {
      const sourceCol = this.draggedCell;
      if(this.tableHeader[targetCol].isDraggable){ 
        this.headerCell = this.swap(this.headerCell,sourceCol,targetCol)
        this.tableHeader = this.swap(this.tableHeader,sourceCol,targetCol)
        this.draggedCell = -1;
      }
    }
  }

  swap<T>(array: T[], index1: number, index2: number) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
    return array;
  }

  ontriggerClick(column: any, row: any) {
    console.log(column);
    console.log(row);
    if(column.rowComponentRenderer && !row.isRowEnabled){
      row.isRowEnabled = true;
      row.childRowInput = column.rowComponentRenderer;
    }
    else{
      row.isRowEnabled = false;
    }
  }

  

  toggleSort(keyName: string){
    if(this.colSortName !== keyName) {
      this.sortType = "";
      this.colSortName = keyName;
    }
    this.sortType = this.sortType === "" ? "asc" : (this.sortType === "desc" ? "asc" : "desc");
    this.tableDataList = this.sortAscendDescend(keyName,this.tableDataList);
  }

  sortAscendDescend(keyName:string,tableDataList: TableRow[]){
   return tableDataList.sort((a, b) =>{
    const akey = this.sortType === "asc" ? a[keyName] : b[keyName];
    const bkey = this.sortType === "asc" ? b[keyName] : a[keyName];
   return (akey as string).localeCompare(bkey as string)
  })
  }

  private isResizing = false;
  private startX = 0;
  private startWidth = 0;
  private colIndex = 0;
  private filterKeyName = "";

  startResize(event: MouseEvent, colIndex: number) {
    event.preventDefault();
    if (!this.isResizing) return;
    this.colIndex = colIndex;
    this.startX = event.clientX;
    this.startWidth = this.tableHeader[colIndex].width ? this.tableHeader[colIndex].width : 100;
  }


   @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isResizing) return;
    const newWidth = this.startWidth + (event.clientX - this.startX);
    this.tableHeader[this.colIndex].width = newWidth;
  }

  @HostListener('document:mouseup')
  @HostListener('document:touchend')
  stopResize() {
    this.isResizing = false;
  }

 previousX:number = 0;
  resizeColumn(event: MouseEvent,colIndex: number){
    const headerColumn = this.tableHeader[colIndex];
    if(headerColumn.width){
      const currentX = event.pageX;

    if (currentX > this.previousX) {
      console.log('Moving right 👉');
      headerColumn.width = headerColumn.width ? headerColumn.width + event.offsetX : 100 + event.offsetX ; 
    } else if (currentX < this.previousX) {
      headerColumn.width = headerColumn.width ? headerColumn.width - event.offsetX : 100 - event.offsetX ; 
    }

    this.previousX = currentX;
    }

  }
  holdTimer: any;
  onMouseDown() {
  this.isResizing = true;
}

onMouseUp() {
  this.isResizing = false;
}


toggleFilterDropdown(keyname: string,index: number) {
  this.dropdownIndex = index;
  this.filterKeyName = keyname;
}

toggleDropdown(event: any) {
  this.dropdownIndex = -1;
  this.filterKeyName = "";
}


getfilteredData(colummnFilterList: any): void {
let filteredListGlobal: any = []
let isFilterChecked = false;
Object.keys(this.filterObject).forEach(key => {
    const filterList = this.filterObject[key].filter((item: any) => item.ischecked).map((key: any) => key.keyName);
    if(filterList && filterList.length > 0) {
      isFilterChecked = true;
      const getTableList = filteredListGlobal.length > 0 ? filteredListGlobal.slice().flat() : Object.assign([],this.tableData);
      filteredListGlobal = this.getCustomFilteredDataList(filterList ? filterList : [], key, getTableList);
    }
  });
  this.tableDataList = isFilterChecked ? filteredListGlobal.slice().flat() : Object.assign([], this.tableData);
  this.dropdownIndex = -1;
  if(this.colSortName != ""){
    this.tableDataList = this.sortAscendDescend(this.colSortName,this.tableDataList);
    this.paginatedDataList();
  }
}

getFilteredDataList(filteredList: string[], keyName: string) {
  return filteredList.length > 0 ? this.tableData.filter(item => filteredList.find(filterList => filterList === item[keyName])) : this.tableData;
}

getCustomFilteredDataList(filteredList: string[], keyName: string, tableData: TableRow[]) {
  return filteredList.length > 0 ? tableData.filter(item => filteredList.find(filterList => filterList === item[keyName])) : [];
}

totalPages:number = 0;
currentPage = 1;
itemsPerPage:number = 5;

goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
        this.currentPage = page;
    }
    this.paginatedDataList();
  }

   paginatedDataList() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedTableList =  this.tableDataList.slice(start, start + this.itemsPerPage);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  prevPage(): void {
    this.goToPage(this.currentPage - 1);
  }

   private calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.tableDataList.length / this.itemsPerPage);
    if (this.totalPages === 0) this.totalPages = 1;
  }

}
