import { Routes } from '@angular/router';
// страницы
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Kurs } from './pages/kurs/kurs';
import { Practic } from './pages/practic/practic';
import { Projects } from './pages/projects/projects';
import { SelfDev } from './pages/self-dev/self-dev';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "kurs", component: Kurs },
  { path: "practic", component: Practic },
  { path: "projects", component: Projects },
  { path: "self-dev", component: SelfDev },  // исправил регистр
];
