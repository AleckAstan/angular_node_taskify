import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// Import for contact Service, used for adding and display contacts with the backend server.
import {ApiService} from './services/api.service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// Import for HTTP requests
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Imported Components
import {CreateComponent} from './create/create.component';
import {ViewComponent} from './view/view.component';
import {CompletedComponent} from './completed/completed.component';
import {NoteComponent} from './note/note.component';
import {EditComponent} from './edit/edit.component';
import {TodayComponent} from './today/today.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
// Import for Forms
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
    declarations: [
        AppComponent,
        CreateComponent,
        ViewComponent,
        CompletedComponent,
        NoteComponent,
        EditComponent,
        PageNotFoundComponent,
        TodayComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatDividerModule,
        MatListModule,
        MatFormFieldModule,
        MatDialogModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatGridListModule,
        MatToolbarModule,
        MatExpansionModule,
        MatGridListModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatRadioModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    /* Because MatDialog instantiates components at run-time, the Angular compiler
     * needs extra information to create the necessary ComponentFactory for your dialog
     * content component.
     * Pages that use the import 'MatDialog':
     *    - CreateComponent
     *    - NoteComponent
     */
    entryComponents: [
        CreateComponent,
        NoteComponent
    ],
    providers: [
        ApiService,
        CreateComponent,
        ViewComponent,
        MatDatepickerModule,
        MatNativeDateModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
