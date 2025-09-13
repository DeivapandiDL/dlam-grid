import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderercolumnComponent } from './renderercolumn.component';

describe('RenderercolumnComponent', () => {
  let component: RenderercolumnComponent;
  let fixture: ComponentFixture<RenderercolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderercolumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderercolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
