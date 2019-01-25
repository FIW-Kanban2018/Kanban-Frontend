import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mitarbeiter',
  templateUrl: './mitarbeiter.component.html',
  styleUrls: ['./mitarbeiter.component.css']
})
export class MitarbeiterComponent implements OnInit {

  constructor() { }

  // Auswahl aus {geschaeft, referatsueber, langfristig, done}
  category = '';
  // Auswahl aus {telefonat, sonstiges, mitarbeiteranmelden, wanderkarte, veranstaltung, dringend}
  cardCategory = '';

  ngOnInit() {
  }

}
