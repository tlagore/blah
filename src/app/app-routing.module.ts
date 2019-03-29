import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatModule } from './chat/chat.module';

const routes: Routes = [
  { path: '', component: ChatModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
