import { Routes } from '@angular/router';
import { WorkArrangementTemplates } from './work-arrangement-templates/work-arrangement-templates';

export const routes: Routes = [
  { path: '', redirectTo: 'work-arrangements', pathMatch: 'full' },
  { path: 'work-arrangements', component: WorkArrangementTemplates}
];