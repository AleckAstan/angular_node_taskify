import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Imported Components
import {ViewComponent} from './view/view.component';
import {CompletedComponent} from './completed/completed.component';
import {EditComponent} from './edit/edit.component';
import {TodayComponent} from './today/today.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '', // Main view page for viewing task
        component: ViewComponent,
    },
    {
        path: 'completed', // Completed tasks page
        component: CompletedComponent,
    },
    {
        path: 'edit/:id', // Edit page for editing a selected task
        component: EditComponent
    },
    {
        path: 'today', // Page that displayed current date tasks
        component: TodayComponent,
    },
    {path: '**', component: PageNotFoundComponent} // Displays 404 error page if user try's to nav to a page not in the app.
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
