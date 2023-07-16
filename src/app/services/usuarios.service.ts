import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios() {
    const params = new HttpParams().set('page', '2');

    return this.http
      .get('https://reqres.in/api/users', { params })
      .pipe(map((resp: any) => resp['data']));
  }
}
