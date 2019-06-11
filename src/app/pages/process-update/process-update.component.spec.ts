import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessUpdateComponent } from './process-update.component';

describe('ProcessUpdateComponent', () => {
  let component: ProcessUpdateComponent;
  let fixture: ComponentFixture<ProcessUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
