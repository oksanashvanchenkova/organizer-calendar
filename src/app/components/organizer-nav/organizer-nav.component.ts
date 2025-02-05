import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav[organizerNav]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './organizer-nav.component.html',
  styleUrl: './organizer-nav.component.scss'
})
export class OrganizerNavComponent {

}
