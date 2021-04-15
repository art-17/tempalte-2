import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooetrComponent } from './fooetr.component';

describe('FooetrComponent', () => {
  let component: FooetrComponent;
  let fixture: ComponentFixture<FooetrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooetrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooetrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
