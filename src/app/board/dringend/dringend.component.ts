import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dringend',
  templateUrl: './dringend.component.html',
  styleUrls: ['./dringend.component.css']
})
export class DringendComponent implements OnInit {

  constructor() { }

  // Auswahl aus {geschaeft, referatsueber, langfristig, done}
  category = '';
  // Auswahl aus {telefonat, sonstiges, mitarbeiteranmelden, wanderkarte, veranstaltung, dringend}
  cardCategory = '';

  ngOnInit() {
  }

}
