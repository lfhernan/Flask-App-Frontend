import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-static-player',
	templateUrl: './static-player.component.html',
	styleUrls: ['./static-player.component.css']
})
export class StaticPlayerComponent implements OnInit {

	constructor(private http: HttpClient) { }

	ngOnInit(): void { }
}
