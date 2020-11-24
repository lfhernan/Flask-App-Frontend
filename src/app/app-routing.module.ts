import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { LivestreamComponent } from 'src/components/livestream/livestream.component';
import { HomeComponent } from '../components/home-component/home-component.component';
import { StaticPlayerComponent } from '../components/static-player-component/static-player.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'video', component: StaticPlayerComponent, canActivate: [AuthGuard] },
	{ path: 'live', component: LivestreamComponent, canActivate: [AuthGuard] }
]

@NgModule({
	imports: [RouterModule.forRoot(
		appRoutes,
		{ enableTracing: false }
	)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
