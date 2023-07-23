import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComunidadeComponent } from './page-comunidade.component';

describe('PageComunidadeComponent', () => {
  let component: PageComunidadeComponent;
  let fixture: ComponentFixture<PageComunidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageComunidadeComponent]
    });
    fixture = TestBed.createComponent(PageComunidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
