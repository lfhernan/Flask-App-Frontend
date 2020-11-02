import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';

@Pipe({
	name: 'authVideo'
})
export class AuthVideoComponent implements PipeTransform {
	constructor(
		private http: HttpClient,
		private auth: AuthService
	) { }

	async transform(src: string): Promise<string> {
		try {
			const videoBlob = await this.http.get(src, { responseType: 'blob' }).toPromise();
			const reader = new FileReader();
			return new Promise((resolve, reject) => {
				reader.onloadend = () => resolve(reader.result as string);
				reader.readAsDataURL(videoBlob);
			});
		} catch {
			return;
		}
	}
}
