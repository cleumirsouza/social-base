import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FilterRepositoryComponent } from "./pages/filter-repository/filter-repository.component";

// Array of the routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'filter', component: FilterRepositoryComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
@NgModule({
  // Initialize the router and start it listening for browser location changes.
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
