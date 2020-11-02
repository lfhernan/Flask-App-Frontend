import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
	selector: 'app-home-component',
	templateUrl: './home-component.component.html',
	styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {

	constructor(public auth: AuthService) { }

	ngOnInit(): void {
	}

}
