import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlamTableComponent } from './dlam-table.component';

describe('DlamTableComponent', () => {
  let component: DlamTableComponent;
  let fixture: ComponentFixture<DlamTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlamTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
