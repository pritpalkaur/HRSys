import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-work-arrangement-template-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './work-arrangement-template-form.html',
  styleUrls: ['./work-arrangement-template-form.css']
})
export class WorkArrangementTemplateForm {
constructor(public route: ActivatedRoute) {}
  templateName = 'Standard 5-Day Week';
  templateType = 'STANDARD';

  days = [
    { name: 'Mon', working: true, start: '09:00', end: '18:00', shift: 'DAY' },
    { name: 'Tue', working: true, start: '09:00', end: '18:00', shift: 'DAY' },
    { name: 'Wed', working: true, start: '09:00', end: '18:00', shift: 'DAY' },
    { name: 'Thu', working: true, start: '09:00', end: '18:00', shift: 'DAY' },
    { name: 'Fri', working: true, start: '09:00', end: '18:00', shift: 'DAY' },
    { name: 'Sat', working: false, start: '', end: '', shift: '' },
    { name: 'Sun', working: false, start: '', end: '', shift: '' }
  ];

  shiftTypes = ['DAY', 'NIGHT', 'CUSTOM'];

  saveTemplate() {
    console.log('Template saved:', {
      name: this.templateName,
      type: this.templateType,
      schedule: this.days
    });
    alert('Template saved (hard-coded demo)');
  }
  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    this.loadTemplate(Number(id));
  }
  
}
loadTemplate(id: number) {
  // Hard-coded templates (same as your list page)
  const templates = [
    {
      id: 1,
      name: 'Standard 5-Day Week',
      type: 'STANDARD',
      schedule: [
        { name: 'Mon', working: true, start: '09:00', end: '18:00', shift: 'DAY' },
        { name: 'Tue', working: true, start: '09:00', end: '18:00', shift: 'DAY' },
        { name: 'Wed', working: true, start: '09:00', end: '18:00', shift: 'DAY' },
        { name: 'Thu', working: true, start: '09:00', end: '18:00', shift: 'DAY' },
        { name: 'Fri', working: true, start: '09:00', end: '18:00', shift: 'DAY' },
        { name: 'Sat', working: false, start: '', end: '', shift: '' },
        { name: 'Sun', working: false, start: '', end: '', shift: '' }
      ]
    },
    {
      id: 2,
      name: 'F&B Day Shift',
      type: 'SHIFT',
      schedule: [
        { name: 'Mon', working: true, start: '08:00', end: '16:00', shift: 'DAY' },
        { name: 'Tue', working: true, start: '08:00', end: '16:00', shift: 'DAY' },
        { name: 'Wed', working: true, start: '08:00', end: '16:00', shift: 'DAY' },
        { name: 'Thu', working: true, start: '08:00', end: '16:00', shift: 'DAY' },
        { name: 'Fri', working: true, start: '08:00', end: '16:00', shift: 'DAY' },
        { name: 'Sat', working: true, start: '08:00', end: '16:00', shift: 'DAY' },
        { name: 'Sun', working: true, start: '08:00', end: '16:00', shift: 'DAY' }
      ]
    }
  ];

  const template = templates.find(t => t.id === id);

  if (template) {
    this.templateName = template.name;
    this.templateType = template.type;
    this.days = template.schedule;
  }
}

}
