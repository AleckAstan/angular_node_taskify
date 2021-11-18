import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {NoteComponent} from '../note/note.component';
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Completed tasks.
 * @desc this component displays the completed tasks data to on screen it adds functions
 * for the user like:
 *     - onDelete() - allows the user delete a post
 *     - openDialog() -  allows the user view the note on a post.
 *     - onUnComplete() - allows the user mark a task as uncompleted and moves it back to current tasks in view.
 *
 * @note this component exports the 'note data' from a selected task to the note.component
 * to be displayed on screen in a pop up dialog box.
 * Used imports:
 *    - import { MatDialog }
 *    - import { NoteComponent }
 *
 * Tasks are displayed from the server where they are stored.
 */

@Component({
    selector: 'app-completed',
    templateUrl: './completed.component.html',
    styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

    tasks: any = []; // Array used for locally storing tasks

    constructor(private api: ApiService, public dialog: MatDialog) {
    }

    /**
     * @title Delete Task
     * @desc makes a delete request to the server for a selected task
     */
    onDelete(id: string) {
        console.log('Deleting item');
        this.api.deleteTask(id).subscribe(() => {
            this.ngOnInit(); // Refresh the page
        });
    }// End onDelete function

    /**
     * @title Note Dialog
     * @desc Function used to open up a popout dialog box to display the note from 'note.component' of the
     * task selected in the view.html.
     * Share data with your dialog, you can use the data option to pass information to the dialog component.
     */
    openDialog(id: String, currNote: String): void {
        const dialogRef = this.dialog.open(NoteComponent, {
            data: { // passing tasks note data and id into the dialog box.
                taskId: id,
                note: currNote
            }// End data
        }); // end function

        dialogRef.afterClosed().subscribe(() => {
            console.log('The dialog was closed');
        });
    } // End function

    /**
     * @title Mark task uncompleted
     * @desc sets a selected task to be marked as uncompleted.
     * @note server handles request task id and true is passed into the .updateTask();
     * isComplete = false
     */
    onUnComplete(id: String) {
        this.api.updateTask(id, false).subscribe(() => { // Update selected task to 'isComplete = false'
            this.ngOnInit();
        });
    }// End Function

    ngOnInit() {
        this.api.getTasksData(true).subscribe(data => {
            this.tasks = data; // get api json data for list
        });

    }// End Function
}// End Class
