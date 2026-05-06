import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkArrangementTemplates } from './work-arrangement-templates';

describe('WorkArrangementTemplates', () => {
  let component: WorkArrangementTemplates;
  let fixture: ComponentFixture<WorkArrangementTemplates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkArrangementTemplates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkArrangementTemplates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
