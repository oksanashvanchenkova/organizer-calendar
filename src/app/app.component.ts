import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrganizerNavComponent } from './components/organizer-nav/organizer-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrganizerNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'organizer-calendar-app';
}
