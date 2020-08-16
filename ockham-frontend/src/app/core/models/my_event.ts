import { CalendarEvent } from 'calendar-utils';

export interface MyEvent extends CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  location: string;
}
