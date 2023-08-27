import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { RegistrationRequestDto } from '../../dtos/RegistrationRequestDto';
import { CommentRequestDto } from '../../dtos/CommentRequestDto';
import { ConfirmationRequestDto } from '../../dtos/ConfirmationRequestDto';
@Injectable({ providedIn: 'root' })
export class RegistrationService {

    private readonly apiUrl='any';
    constructor(private http: HttpClient) {
      
    }

    saveRegistration$= (eventId: number, registrationRequestDto: RegistrationRequestDto) => <Observable<Object>>
    this.http.post<Object>(`${this.apiUrl}/event/${eventId}/registrations`, registrationRequestDto)
   .pipe(
     tap(console.log),
     catchError(this.handleError)
   );

    deleteRegistration$= (eventId: number, registrationId: number) => <Observable<Object>>
    this.http.delete<Object>(`${this.apiUrl}/event/${eventId}/registrations/${registrationId}`)
   .pipe(
     tap(console.log),
     catchError(this.handleError)
   );

    score$= (eventId: number, registrationId: number, commentRequestDto: CommentRequestDto) => <Observable<Object>>
    this.http.put<Object>(`${this.apiUrl}/event/${eventId}/registrations/${registrationId}/score`, commentRequestDto)
   .pipe(
     tap(console.log),
     catchError(this.handleError)
   );

   fetchById$= (eventId: number, registrationId: number) => <Observable<Object>>
   this.http.get<Object>(`${this.apiUrl}/event/${eventId}/registrations/${registrationId}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

   fetchAll$ =(eventId: number) => <Observable<Object>>
   this.http.get<Object>(`${this.apiUrl}/event/${eventId}/registrations`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  patchById$=(eventId: number, registrationId: number, confirmationRequestDto: ConfirmationRequestDto ) => <Observable<Object>>
  this.http.patch<Object>(`${this.apiUrl}/event/${eventId}/registrations`, confirmationRequestDto)
 .pipe(
   tap(console.log),
   catchError(this.handleError)
 );


   private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`An error ocurred - Error code: ${error.status}`);
  }
}