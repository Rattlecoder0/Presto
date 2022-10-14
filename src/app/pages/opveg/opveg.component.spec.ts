import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpvegComponent } from './opveg.component';

describe('OpvegComponent', () => {
  let component: OpvegComponent;
  let fixture: ComponentFixture<OpvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpvegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
