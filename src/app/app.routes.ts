import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'calendar',
    loadComponent: () =>
      import('./modules/calendar/calendar.component').then(
        (c) => c.CalendarComponent
      ),
  },
];
