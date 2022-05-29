import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { GameCardComponent } from "./components/game-card/game-card.component";
import { ListComponent } from "./components/list/list.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";
import { HomeService } from "./services/home.service";
import { MatDialogModule } from '@angular/material/dialog';
import { NewGameDialogComponent } from "./components/new-game-dialog/new-game-dialog.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [
    ListComponent,
    HomeComponent,
    GameCardComponent,
    NewGameDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [HomeService, MatDatepickerModule]
})
export class HomeModule { }
