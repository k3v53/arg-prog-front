import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto.model';
import { LoginUsuario } from '../model/login-usuario.model';
import { NuevoUsuario } from '../model/nuevo-usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL = 'http://localhost:10000/auth/';

  constructor(private httpClient: HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario);
  }
}
