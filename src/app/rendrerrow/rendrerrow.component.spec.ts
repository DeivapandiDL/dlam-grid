import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendrerrowComponent } from './rendrerrow.component';

describe('RendrerrowComponent', () => {
  let component: RendrerrowComponent;
  let fixture: ComponentFixture<RendrerrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendrerrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendrerrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
