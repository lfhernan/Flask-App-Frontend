import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
	selector: 'app-log-in',
	templateUrl: './log-in.component.html',
	styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

	constructor(public auth: AuthService) { }

	ngOnInit(): void {
	}

	loginWithRedirect(): void {
		this.auth.loginWithRedirect();
	}

}