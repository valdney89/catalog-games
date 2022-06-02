import { ListResolver } from './components/list/list.resolver';
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { catalogs: ListResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
