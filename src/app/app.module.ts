import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { environment as prod } from '../environments/environment.prod';

/* My Components */
import { HomeComponent } from '../components/home-component/home-component.component';
import { StaticPlayerComponent } from '../components/static-player-component/static-player.component';
import { LogInComponent } from '../components/log-in/log-in.component';
import { LogOutComponent } from '../components/log-out/log-out.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { AuthVideoComponent } from '../components/auth-video/auth-video.component';
import { LivestreamComponent } from '../components/livestream/livestream.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		StaticPlayerComponent,
		LogInComponent,
		LogOutComponent,
		SignUpComponent,
		NavBarComponent,
		AuthVideoComponent,
		LivestreamComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		FormsModule,
		HttpClientModule,
		VgCoreModule,
		VgControlsModule,
		VgControlsModule,
		VgOverlayPlayModule,
		VgBufferingModule,
		AuthModule.forRoot({
			...env.auth,
			httpInterceptor: {
				allowedList: [
					`${prod.dev.serverUrl}/api/*`,
					`${env.dev.serverUrl}/api/*`
				]
			}
		})
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: AuthHttpInterceptor,
		multi: true,
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
