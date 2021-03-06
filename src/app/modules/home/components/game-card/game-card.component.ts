import { Component, Input } from "@angular/core";

import * as moment from 'moment';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input() title!: string;
  @Input() console!: string;
  @Input() content!: string | undefined;
  @Input() year!: number;
  @Input() dateCompletion!: string | undefined;
  @Input() completed!: boolean;

  getYearAgo() {
    return moment(this.year, "YYYYMMDD").fromNow();
  }
}
