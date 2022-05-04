import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'tv-series', component: TvSeriesComponent },
      { path: 'bookmarked', component: BookmarkedComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    MainLayoutComponent, HomeComponent, MoviesComponent,
    TvSeriesComponent, BookmarkedComponent
 ]
}
