import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { MainComponent } from './modules/main/main.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { ServicesComponent } from './modules/services/services.component';
import { WorkflowComponent } from './modules/workflow/workflow.component';
import { NavigationRoutes } from './shared/enums/navigation-routes.enum';
import { PageTitles } from './shared/enums/page-titles.enum';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: NavigationRoutes.home, component: HomeComponent },
      { path: NavigationRoutes.services, component: ServicesComponent, data: { title: PageTitles.Services } },
      { path: NavigationRoutes.workflow, component: WorkflowComponent, data: { title: PageTitles.Workflow } },
      { path: NavigationRoutes.portfolio, component: PortfolioComponent, data: { title: PageTitles.Portfolio } },
      { path: '**', redirectTo: NavigationRoutes.home, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
