import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { GameCardComponent } from "./components/game-card/game-card.component";
import { ListComponent } from "./components/list/list.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListComponent,
    HomeComponent,
    GameCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
})
export class HomeModule { }
