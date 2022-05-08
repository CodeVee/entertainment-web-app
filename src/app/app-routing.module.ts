import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthPage } from './models/auth-page.enum';
import { AuthComponent } from './pages/auth/auth.component';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
      { path: 'movies', component: MoviesComponent, canActivate: [ AuthGuard ]  },
      { path: 'tv-series', component: TvSeriesComponent, canActivate: [ AuthGuard ]  },
      { path: 'bookmarked', component: BookmarkedComponent, canActivate: [ AuthGuard ]  },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
  { path: AuthPage.Login, component: AuthComponent, data: { page: AuthPage.Login } },
  { path: AuthPage.Signup, component: AuthComponent, data: { page: AuthPage.Signup } },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    MainLayoutComponent, HomeComponent, MoviesComponent,
    TvSeriesComponent, BookmarkedComponent, AuthComponent
 ]
}
