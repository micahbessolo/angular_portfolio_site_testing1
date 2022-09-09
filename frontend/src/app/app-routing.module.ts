import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSuccessComponent } from './contact-success/contact-success.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 0 } },
  { path: 'skills', component: SkillsComponent, data: { animation: 1 } },
  { path: 'portfolio', component: PortfolioComponent, data: { animation: 2} },
  { path: 'contact', component: ContactComponent, data: { animation: 3 } },
  { path: 'contact-success', component: ContactSuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
