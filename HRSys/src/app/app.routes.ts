import { Routes } from '@angular/router';
import { WorkArrangementTemplates } from './work-arrangement-templates/work-arrangement-templates';
import { WorkArrangementTemplateForm } from './work-arrangement-template-form/work-arrangement-template-form';

export const routes: Routes = [
  { path: '', redirectTo: 'work-arrangements', pathMatch: 'full' },
  { path: 'work-arrangements', component: WorkArrangementTemplates },
  { path: 'work-arrangements/create', component: WorkArrangementTemplateForm }
];