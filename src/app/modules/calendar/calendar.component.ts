import { Component } from '@angular/core';
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  addWeeks,
  subWeeks,
  addYears,
  subYears,
  startOfYear,
  endOfYear,
  eachWeekOfInterval
} from 'date-fns';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  view: 'month' | 'week' | 'day' | 'year' = 'month';
  currentDate: Date = new Date();
  days: Date[] = [];
  weeks: Date[][] = [];
  format=format;
  constructor() {
    this.generateCalendar();
  }

  setView(view: 'month' | 'week' | 'day' | 'year') {
    this.view = view;
    this.generateCalendar();
  }

  changeMonth(direction: number) {
    this.currentDate = direction > 0 ? addMonths(this.currentDate, 1) : subMonths(this.currentDate, 1);
    this.generateCalendar();
  }

  changeWeek(direction: number) {
    this.currentDate = direction > 0 ? addWeeks(this.currentDate, 1) : subWeeks(this.currentDate, 1);
    this.generateCalendar();
  }

  changeYear(direction: number) {
    this.currentDate = direction > 0 ? addYears(this.currentDate, 1) : subYears(this.currentDate, 1);
    this.generateCalendar();
  }

  generateCalendar() {
    if (this.view === 'month') {
      const start = startOfMonth(this.currentDate);
      const end = endOfMonth(this.currentDate);
      this.days = eachDayOfInterval({ start, end });
    } else if (this.view === 'week') {
      const start = startOfWeek(this.currentDate);
      const end = endOfWeek(this.currentDate);
      this.days = eachDayOfInterval({ start, end });
    } else if (this.view === 'day') {
      this.days = [this.currentDate];
    } else if (this.view === 'year') {
      const start = startOfYear(this.currentDate);
      const end = endOfYear(this.currentDate);
      this.weeks = eachWeekOfInterval({ start, end }).map(weekStart => 
        eachDayOfInterval({ start: weekStart, end: addWeeks(weekStart, 1) })
      );
    }
  }
}
