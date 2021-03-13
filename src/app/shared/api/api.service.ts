import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = "https://randomapi.com/api/jnzbg53w?key=120H-ZT90-GPZ4-I3ZM&results=15"
  constructor(private http: HttpClient) { 
  }

  getAllUsers(): Observable<any>{
    return this.http.get(this.apiURL, this.getOptions())
    .pipe(catchError((err) => this.handleError(err)));
  }

  getOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    };
    return httpOptions;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("Ocurrió un error:", error.error.message);
    } else {
      console.error(`El backend ha retornado el siguiente error ${error.status}, ` + `Body:`);
      console.log(error.error);
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
}
