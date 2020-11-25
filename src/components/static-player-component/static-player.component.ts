import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IMedia {
	title: string;
	src: string;
	type: string;
}

@Component({
	selector: 'app-static-player',
	templateUrl: './static-player.component.html',
	styleUrls: ['./static-player.component.css']
})
export class StaticPlayerComponent implements OnInit {
	playlist: Array<IMedia> = [
		{
			title: 'Test Video',
			src: 'https://lhern238-project-backend.herokuapp.com/api/video/test.mp4',
			type: 'video/mp4'
		},
		{
			title: 'Videogular',
			src: 'https://lhern238-project-backend.herokuapp.com/api/video/videogular.mp4',
			type: 'video/mp4'
		}

	];

	currentIndex = 0;
	currentItem: IMedia = this.playlist[this.currentIndex];

	onClickPlayListItem(item: IMedia, index) {
		this.currentIndex = index;
		this.currentItem = item;
	}

	constructor(private http: HttpClient) { }

	ngOnInit(): void { }
}
