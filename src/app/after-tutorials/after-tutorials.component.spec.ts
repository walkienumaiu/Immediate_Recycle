import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterTutorialsComponent } from './after-tutorials.component';

describe('AfterTutorialsComponent', () => {
  let component: AfterTutorialsComponent;
  let fixture: ComponentFixture<AfterTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
