import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: "",component:HomeComponent, pathMatch:'full'},
  // {path: 'home', loadChildren: () => import('./home/home.component').then(m=>m.HomeComponent),data: {preload:false}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
