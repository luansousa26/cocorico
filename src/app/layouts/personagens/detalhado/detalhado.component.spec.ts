import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhadoComponent } from './detalhado.component';

describe('DetalhadoComponent', () => {
  let component: DetalhadoComponent;
  let fixture: ComponentFixture<DetalhadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
