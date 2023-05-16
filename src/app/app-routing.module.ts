import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GjsComponent } from './gjs/gjs.component';

const routes: Routes = [
  {path:'',component: GjsComponent},
  {path:"gjs",component:GjsComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
