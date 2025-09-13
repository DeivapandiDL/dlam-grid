import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelamGridComponent } from './delam-grid.component';

describe('DelamGridComponent', () => {
  let component: DelamGridComponent;
  let fixture: ComponentFixture<DelamGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelamGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelamGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
