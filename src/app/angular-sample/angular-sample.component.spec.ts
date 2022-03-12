import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSampleComponent } from './angular-sample.component';

describe('AngularSampleComponent', () => {
  let component: AngularSampleComponent;
  let fixture: ComponentFixture<AngularSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
