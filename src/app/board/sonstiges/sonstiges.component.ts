import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sonstiges',
  templateUrl: './sonstiges.component.html',
  styleUrls: ['./sonstiges.component.css']
})
export class SonstigesComponent implements OnInit {

  constructor() { }

  // Auswahl aus {geschaeft, referatsueber, langfristig, done}
  category = '';
  // Auswahl aus {telefonat, sonstiges, mitarbeiteranmelden, wanderkarte, veranstaltung, dringend}
  cardCategory = '';

  ngOnInit() {
  }

}
