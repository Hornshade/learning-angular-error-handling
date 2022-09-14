import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorPageComponent,
    title: '404 Error',
  },
  { path: '', component: HomeComponent, title: 'Home' },
  { path: '**', component: ErrorPageComponent, title: '404 Error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
