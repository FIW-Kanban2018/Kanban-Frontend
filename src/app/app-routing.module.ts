import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardComponent} from "./board/board.component";
import {TelefonatComponent} from "./board/telefonat/telefonat.component";


const routes: Routes = [
  {path: 'telefonat', component : TelefonatComponent},
  {path:'board' , component : BoardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
