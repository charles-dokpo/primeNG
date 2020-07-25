import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankHolidayService {

  constructor(private http: HttpClient) { }

  public getAllHoliday() {
    return this.http.get('https://calendrier.api.gouv.fr/jours-feries/metropole.json');
  }

}
