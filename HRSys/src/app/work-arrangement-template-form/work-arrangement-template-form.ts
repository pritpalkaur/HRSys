import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
}
