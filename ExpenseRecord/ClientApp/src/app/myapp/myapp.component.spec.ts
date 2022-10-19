import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYAPPComponent } from './myapp.component';

describe('MYAPPComponent', () => {
  let component: MYAPPComponent;
  let fixture: ComponentFixture<MYAPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MYAPPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MYAPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
