import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private apiService: ApiService
  ) { }


  getServices() {
    const url = `${environment.host}/api/v1/service/get-services`;
    return this.apiService.get(url)
  }
  
}
