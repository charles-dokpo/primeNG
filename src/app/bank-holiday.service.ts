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

  public getAllrooms() {
    return this.http.get('http://localhost:9797/getAllRooms');
  }

  public savePlanning(planning) {
    return this.http.post('http://localhost:9797/save_planning', planning, {responseType: 'text' as 'json'});
  }


}
