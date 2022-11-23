import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PublishOjectComponent } from './components/publish-oject/publish-oject.component';

const routes: Routes = [
  {path:"index", component:LandingComponent},
  {path:"lost", component:PublishOjectComponent},
  {path:"found", component:PublishOjectComponent},
  {path:"", pathMatch:"full", redirectTo:"index"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
