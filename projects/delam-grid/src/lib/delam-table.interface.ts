export interface DlamTableInterface {
  keyName: any;
        name: string;
         age: string;
}

export interface tableCssClass {
headerClass: string;
headerColClass: string; 
bodyClass: string; 
bodyColClass:string;
}

export interface DlamTableHeaderInterface { 
    headerName: string;
    keyName: string;
    isDraggable?: boolean;
    colRenderer?: any;
    colcomponentRenderer?: any;
    rowComponentRenderer?: any;
    class?: tableCssClass
    callbackEvent?: any;
    width?: number;
    height?: string;
    isSort?: boolean;
    resize?: boolean;
    isFilterEnabled?: boolean;
}

export interface DynamicObject {
  [key: string]: any;
}

export interface columnFilterInterface { 
  keyName:string; 
  ischecked: boolean;
}

export interface TableRow {
  [key: string]: string | number | boolean; // or whatever types your cells hold
}
