import { Component } from '@angular/core';
declare const window: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
  // Define the 'otpless' function
  window.otpless = (otplessUser: any) => {
    alert(JSON.stringify(otplessUser));
  };
}
}
