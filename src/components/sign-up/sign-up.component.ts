import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	constructor(public auth: AuthService) { }

	ngOnInit(): void {
	}

	loginWithRedirect(): void {
		this.auth.loginWithRedirect({ screen_hint: 'signup' });
	}

}