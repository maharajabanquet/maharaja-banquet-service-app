import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';

import { Storage } from '@capacitor/storage';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = 'my-token';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	// Init with null to filter out the first value in a guard!
	isAuthenticated = new Subject()
	token = '';

	constructor(private http: HttpClient) {
		this.loadToken();
	}

	async loadToken() {
		const token = await Storage.get({ key: TOKEN_KEY });
		if (token && token.value) {
      let parseToken = JSON.parse(token.value)
      console.log(parseToken);
			this.token = parseToken;
			this.isAuthenticated.next(true);
		} else {
			this.isAuthenticated.next(false);
		}
	}

	login(credentials:any): Observable<any> {
		return this.http.post(`${environment.host}/api/v1/app-user/login`, credentials).pipe(
			map((data: any) => data.user),
			switchMap((token) => {
				return from(Storage.set({ key: TOKEN_KEY, value: JSON.stringify(token) }));
			}),
			tap((_) => {
				this.isAuthenticated.next(true);
			})
		);
	}

	logout(): Promise<void> {
		this.isAuthenticated.next(false);
		return Storage.remove({ key: TOKEN_KEY });
	}
}