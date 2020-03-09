import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommenttaireComponent } from './commenttaire.component';

describe('CommenttaireComponent', () => {
  let component: CommenttaireComponent;
  let fixture: ComponentFixture<CommenttaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommenttaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommenttaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
