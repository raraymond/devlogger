import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { Log } from '../models/log';

@Injectable()
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
  });

  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated Components',
        date: new Date('12/26/2019 12:54:23'),
      },
      {
        id: '2',
        text: 'Added bootstrap',
        date: new Date('12/26/2019 13:54:23'),
      },
      {
        id: '3',
        text: 'Addded Components',
        date: new Date('12/26/2019 14:54:23'),
      },
    ];
  }
  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }
}
