import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
import { AddNoteAttributeDirective } from './add-note-attribute.directive';
import { AppNotesComponent } from './app-notes.component';
import { AnchorNotesDirective } from './anchor-notes.directive';
import { TrigerNotesResolverService } from './triger-notes-resolver.service';
import { KendoGridTestComponent } from './kendo-grid/kendo-grid-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    AddNoteAttributeDirective,
    AppNotesComponent,
    AnchorNotesDirective,
    KendoGridTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    GridModule
  ],
  providers: [AccountsService, LoggingService, TrigerNotesResolverService],
  bootstrap: [AppComponent],
  entryComponents: [AppNotesComponent]
})
export class AppModule { }
