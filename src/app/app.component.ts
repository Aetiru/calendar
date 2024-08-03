import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule } from 'angular-calendar';
import { DemoComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FlatpickrModule, // Importa el módulo Flatpickr
    CalendarModule,  // Importa el módulo Calendar
    DemoComponent    // Importa el DemoComponent como un componente independiente
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class AppComponent {
  title = 'calendar';
}
