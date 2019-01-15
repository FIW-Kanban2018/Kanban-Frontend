import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material';
import { MatMenuModule} from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { BoardComponent } from './board/board.component';
import { TelefonatComponent } from './board/telefonat/telefonat.component';
import { MatDialogModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { VeranstaltungComponent } from './board/veranstaltung/veranstaltung.component';
import { SonstigesComponent } from './board/sonstiges/sonstiges.component';
import { WanderkarteComponent } from './board/wanderkarte/wanderkarte.component';
import { DringendComponent} from './board/dringend/dringend.component';
import { MitarbeiterComponent} from './board/mitarbeiter/mitarbeiter.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TelefonatComponent,
    BoardComponent,
    DringendComponent,
    MitarbeiterComponent,
    VeranstaltungComponent,
    SonstigesComponent,
    WanderkarteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,
    DragDropModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BoardComponent, TelefonatComponent, DringendComponent, VeranstaltungComponent, MitarbeiterComponent, SonstigesComponent, WanderkarteComponent]
})
export class AppModule { }
