import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

import { map, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {_throw} from 'rxjs/observable/throw';

import { environment } from '../../../environments/environment';
import { HttpUserEvent } from '@angular/common/http';
import { HttpSentEvent } from '@angular/common/http';
import { HttpHeaderResponse } from '@angular/common/http';
import { HttpProgressEvent } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  access_token = null;
  headerEnccode: any;
  
  constructor(
    private router: Router
  ) {
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.access_token = localStorage.getItem('access_token');
    let authReq;
    
    authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    return next.handle(authReq).pipe(catchError( (err, caught) => {      
      const error = err.error.message || err.statusText;
      return of(error);
    }) as any);
  }
}
