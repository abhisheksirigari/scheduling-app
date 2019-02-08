import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { WebService } from './web.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class SchedulerService extends WebService<any> {

  constructor(
    private httpClient: HttpClient,
  ) {
    super(httpClient);
   }

   updateSchedule(data) {
    const options = {
      url: environment.apiUrl + 'schedule',
      params: data
    };
    return this.httpClient.post(options.url, options.params).pipe(res => res);
  }

}
