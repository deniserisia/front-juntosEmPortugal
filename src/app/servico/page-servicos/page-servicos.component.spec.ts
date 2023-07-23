import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServicosComponent } from './page-servicos.component';

describe('PageServicosComponent', () => {
  let component: PageServicosComponent;
  let fixture: ComponentFixture<PageServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageServicosComponent]
    });
    fixture = TestBed.createComponent(PageServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
