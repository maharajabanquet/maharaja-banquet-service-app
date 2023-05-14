import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  credentials!: FormGroup;
  constructor(
    private fb: FormBuilder,
		private alertController: AlertController,
		private router: Router,
  ) { }

  ngOnInit() {
  }

}
