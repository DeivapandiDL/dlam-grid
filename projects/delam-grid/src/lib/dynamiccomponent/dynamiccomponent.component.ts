import { Component, Input, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamiccomponent',
  imports: [],
  template: '<ng-container #dynamicComponent></ng-container>',
  styles: ['']
})
export class DynamiccomponentComponent {
@Input() childRowInput: Record<string, any> = {}; // Inputs to pass
  @Input() columnName:any;
  @Input() childDynamicComponent!: any;
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) dynamicComponent!: ViewContainerRef;



  private isViewReady = false;

  ngAfterViewInit() {
    this.isViewReady = true;
    this.loadComponent(); // ✅ safe now
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.isViewReady && changes['childDynamicComponent']) {
      this.loadComponent();
    }
  }

  private loadComponent() {
    if (!this.dynamicComponent || !this.childDynamicComponent) return;
    
    this.dynamicComponent.clear();
    const compRef = this.dynamicComponent.createComponent(this.childDynamicComponent);
    compRef.setInput('childRowInput', this.childRowInput);
    if(this.columnName) {
      compRef.setInput('columnName', this.columnName);
    }
    compRef.changeDetectorRef.detectChanges();
  }
}
