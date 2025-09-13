import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccomponentComponent } from './dynamiccomponent.component';

describe('DynamiccomponentComponent', () => {
  let component: DynamiccomponentComponent;
  let fixture: ComponentFixture<DynamiccomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamiccomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamiccomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
