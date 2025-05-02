import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path:"", component:MainComponent},
  { path:"about", component:AboutComponent},
  { path:"service", component:ServicesComponent},
  { path:"portfolio", component:PortfolioComponent},
  { path:"contact", component:ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
