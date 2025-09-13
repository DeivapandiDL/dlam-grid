import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DelamGridComponent } from 'delam-grid';
import { RenderercolumnComponent } from './renderercolumn/renderercolumn.component';
import { RendrerrowComponent } from './rendrerrow/rendrerrow.component';
import { DlamTableHeaderInterface, TableRow } from 'dlam-grid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DelamGridComponent, RenderercolumnComponent, RendrerrowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  tableHeader: DlamTableHeaderInterface[] = [
  {
    headerName:"S.No", 
    keyName:"id", 
    isDraggable:true,
    width:100,
    resize:true,
  },
  { 
    headerName:"Name", 
    keyName:"name", 
    isDraggable:false,
    isSort:true,
    resize:true,
    width:240,
    class:{headerClass:"headerFirstClass",headerColClass:"headerColFirstClass", bodyClass:"tdClass", bodyColClass:"tdcolDiv"},
    colRenderer: (param:any) => {
      return param.name +", "+ (param.school ? param.school : "not there")
    },
    isFilterEnabled: true,
    callbackEvent: (column: any, row: any) => this.ontriggerClick(column, row),
    },
  {
    headerName: "Age",keyName: "age", 
    isDraggable:true,
    isSort:true,
    resize:true,
    width:100,
    isFilterEnabled: true
  },
  {
    headerName:"Email", 
    keyName:"email", 
    isDraggable:true,
    isFilterEnabled: true,
  },
  {headerName:"Address", keyName:"address", isDraggable:true},
  {headerName:"Phone Number", keyName:"phoneNumber", isDraggable:true,resize:true,},
  {headerName:"City", keyName:"city", isDraggable:true},
  {headerName:"State", keyName:"state", isDraggable:true,resize:true,},
  {headerName:"Country", keyName:"country", isDraggable:true},
  
];


tableData: TableRow[] = [
  {id:1,name:'DevaDls', age:'35', school:"MKHSS", email:"thamdeva@gmail.com", address:"testesd address 1", phoneNumber:"123", city:"Chennai", state:"Tamilnadu", country:"India"},
  {id:2,name:'ArunKumarwelcome', age:'28', school:"GHSS", email:"arun28@gmail.com", address:"north street", phoneNumber:"456", city:"Madurai", state:"Tamilnadu", country:"India"},
  {id:3,name:'PriyaS', age:'30', school:"SVHS", email:"priya30@gmail.com", address:"east colony", phoneNumber:"789", city:"Trichy", state:"Tamilnadu", country:"India"},
  {id:4,name:'KarthikM', age:'32', school:"NHSS", email:"karthik32@gmail.com", address:"west avenue", phoneNumber:"321", city:"Coimbatore", state:"Tamilnadu", country:"India"},
  {id:5,name:'LakshmiR', age:'27', school:"GHSS", email:"lakshmi27@gmail.com", address:"lake view road", phoneNumber:"654", city:"Salem", state:"Tamilnadu", country:"India"},
  {id:6,name:'SureshP', age:'40', school:"BHSS", email:"suresh40@gmail.com", address:"green park", phoneNumber:"987", city:"Erode", state:"Tamilnadu", country:"India"},
  {id:7,name:'MeenaK', age:'29', school:"MHSS", email:"meena29@gmail.com", address:"anna nagar", phoneNumber:"147", city:"Vellore", state:"Tamilnadu", country:"India"},
  {id:8,name:'RajeshV', age:'34', school:"CHSS", email:"rajesh34@gmail.com", address:"main bazaar", phoneNumber:"258", city:"Tirunelveli", state:"Tamilnadu", country:"India"},
  {id:9,name:'AnithaJ', age:'31', school:"JHSS", email:"anitha31@gmail.com", address:"flower street", phoneNumber:"369", city:"Thoothukudi", state:"Tamilnadu", country:"India"},
  {id:10,name:'VijayB', age:'36', school:"KHSS", email:"vijay36@gmail.com", address:"college road", phoneNumber:"741", city:"Kanchipuram", state:"Tamilnadu", country:"India"},
  {id:11,name:'DivyaC', age:'25', school:"LHSS", email:"divya25@gmail.com", address:"market area", phoneNumber:"852", city:"Karur", state:"Tamilnadu", country:"India"},
  {id:12,name:'ManojD', age:'33', school:"PHSS", email:"manoj33@gmail.com", address:"railway station road", phoneNumber:"963", city:"Dindigul", state:"Tamilnadu", country:"India"},
  {id:13,name:'RameshT', age:'38', school:"RHSS", email:"ramesh38@gmail.com", address:"temple street", phoneNumber:"159", city:"Namakkal", state:"Tamilnadu", country:"India"},
  {id:14,name:'SandhyaL', age:'26', school:"VHSS", email:"sandhya26@gmail.com", address:"new colony", phoneNumber:"357", city:"Krishnagiri", state:"Tamilnadu", country:"India"},
  {id:15,name:'PrakashG', age:'37', school:"XHSS", email:"prakash37@gmail.com", address:"old market road", phoneNumber:"753", city:"Dharmapuri", state:"Tamilnadu", country:"India"}
];

ontriggerClick(column: any, row: any) {
    if(column.rowComponentRenderer && !row.isRowEnabled){
      row.isRowEnabled = true;
      row.childRowInput = column.rowComponentRenderer;
    }
    else{
      row.isRowEnabled = false;
    }
  }

  ngOnInit() {
    const emailComp = this.tableHeader.findIndex(item => item.keyName === "email");
    const phoneNumber = this.tableHeader.findIndex(item => item.keyName === "phoneNumber");
    this.tableHeader[phoneNumber].rowComponentRenderer = RendrerrowComponent;
    this.tableHeader[emailComp].colcomponentRenderer = RenderercolumnComponent;
  }
}
