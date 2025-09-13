import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererColumn } from './RendererColumn';

describe('RendererColumn', () => {
  let component: RendererColumn;
  let fixture: ComponentFixture<RendererColumn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendererColumn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendererColumn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
