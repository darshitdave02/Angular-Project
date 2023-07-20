import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CompoundPageComponent } from './pages/compound-page/compound-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'compounds/:id', component: CompoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
