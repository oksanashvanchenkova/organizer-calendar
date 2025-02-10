import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { TCalendarType } from '../../../../core/models/types/calendar-view';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'div[CalendarControl]',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './calendar-control.component.html',
  styleUrl: './calendar-control.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarControlComponent {
  @Output() onChangeView = new EventEmitter<TCalendarType>();
}
