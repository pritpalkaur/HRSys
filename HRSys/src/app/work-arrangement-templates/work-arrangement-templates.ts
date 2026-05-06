import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router'; 
interface WorkArrangementTemplate {
  id: number;
  name: string;
  type: 'STANDARD' | 'SHIFT' | 'FLEXIBLE';
  scheduleSummary: string;
}

@Component({
  selector: 'app-work-arrangement-templates',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './work-arrangement-templates.html',
  styleUrls: ['./work-arrangement-templates.css']
})
export class WorkArrangementTemplates {
constructor(private router: Router) {}
  templates: WorkArrangementTemplate[] = [
    {
      id: 1,
      name: 'Standard 5-Day Week',
      type: 'STANDARD',
      scheduleSummary: 'Mon–Fri • 9:00 AM – 6:00 PM'
    },
    {
      id: 2,
      name: 'F&B Day Shift',
      type: 'SHIFT',
      scheduleSummary: 'Mon–Sun • 8:00 AM – 4:00 PM'
    },
    {
      id: 3,
      name: 'F&B Night Shift',
      type: 'SHIFT',
      scheduleSummary: 'Mon–Sun • 4:00 PM – 12:00 AM'
    },
    {
      id: 4,
      name: 'Flexible Schedule',
      type: 'FLEXIBLE',
      scheduleSummary: 'Varies • No fixed weekly pattern'
    }
  ];

  onCreate() {
        this.router.navigate(['/work-arrangements/create']);
  }

  onEdit(template: WorkArrangementTemplate) {
      this.router.navigate(['/work-arrangements/edit', template.id]);
      //alert('Edit Template: ' + template.name);
  }
}