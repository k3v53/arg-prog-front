import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AcercaService {
  URL = 'http://localhost:10000/acerca/';

  constructor(private httpClient: HttpClient) {}
}
