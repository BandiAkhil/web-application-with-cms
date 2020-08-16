import { LOCALE_ID, Inject, Injectable } from '@angular/core';
import { CalendarEventTitleFormatter } from 'angular-calendar';
import { DatePipe } from '@angular/common';
import { MyEvent } from 'src/app/core/models/my_event';

@Injectable()
export class CustomEventFormatterService extends CalendarEventTitleFormatter {

  constructor(@Inject(LOCALE_ID) private locale: string) {
    super();
  }

  month(event: MyEvent): string {
    return `${event.title}<br>
    <ul>
        <li>
        <b>Start:</b>
        ${new DatePipe(this.locale).transform(
          event.start,
      'd MMM y HH:mm',
          this.locale )}
        </li>
        <li>
        <b>End:</b>
        ${new DatePipe(this.locale).transform(
          event.end,
      'd MMM y HH:mm',
          this.locale )}
        </li>
        <li>
        <b>Location:</b>
        ${event.location}
        </li>
    </ul>`;
  }

  week(event: MyEvent): string {
    return `${event.title}<br>
    <ul>
        <li>
        <b>Start:</b>
        ${new DatePipe(this.locale).transform(
      event.start,
      'd MMM y HH:mm',
      this.locale )}
        </li>
        <li>
        <b>End:</b>
        ${new DatePipe(this.locale).transform(
      event.end,
      'd MMM y HH:mm',
      this.locale )}
        </li>
        <li>
        <b>Location:</b>
        ${event.location}
        </li>
    </ul>`;
  }

  day(event: MyEvent): string {
    return `${event.title}<br>
    <ul>
        <li>
        <b>Start:</b>
        ${new DatePipe(this.locale).transform(
      event.start,
      'd MMM y HH:mm',
      this.locale )}
        </li>
        <li>
        <b>End:</b>
        ${new DatePipe(this.locale).transform(
      event.end,
      'd MMM y HH:mm',
      this.locale )}
        </li>
        <li>
        <b>Location:</b>
        ${event.location}
        </li>
    </ul>`;
  }
}
