import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkArrangementTemplateForm } from './work-arrangement-template-form';

describe('WorkArrangementTemplateForm', () => {
  let component: WorkArrangementTemplateForm;
  let fixture: ComponentFixture<WorkArrangementTemplateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkArrangementTemplateForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkArrangementTemplateForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
