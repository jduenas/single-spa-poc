import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';


const routes: Routes = [
  <any>{ path: 'home', component: AppComponent, name: "angular" }
];

const pluginRoute: Routes = [
  <any>{ path: '**', component: EmptyRouteComponent, name: "single-spa" }
]

const effectiveRoutes = environment.singleSpa === true ? pluginRoute : routes;
console.log(`Routes: `, effectiveRoutes);
@NgModule({
  imports: [RouterModule.forRoot(effectiveRoutes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
