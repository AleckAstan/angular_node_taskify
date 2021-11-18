import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {NoteComponent} from '../note/note.component';
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Today tasks.
 * @desc this component displays current day tasks(today's date)

 *     - onDelete() - allows the user delete a post
 *     - openDialog() -  allows the user view the note on a post.
 *     - onComplete() - allows the user mark a task as complete.
 *     - onUpdate() - allows the user update the priority of a task.
 *
 * @note this component exports the 'note data' from a selected task to the note.component
 * to be displayed on screen in a pop up dialog box.
 * Used imports:
 *    - import { MatDialog }
 *    - import { NoteComponent }
 *
 * Tasks are got from the server where they are stored.
 */

@Component({
    selector: 'app-today',
    templateUrl: './today.component.html',
    styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

    tasks: any = []; // Array used for locally storing tasks

    constructor(private api: ApiService, public dialog: MatDialog) {
    }

    /**
     * @title Delete Task
     * @desc makes a delete request to the server for a selected task
     */
    onDelete(id: String) {
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
            } // End data
        }); // end function

        dialogRef.afterClosed().subscribe(() => {
            console.log('The dialog was closed');
        });
    }

    /**
     * @title Mark task completed
     * @desc sets a selected task to be marked as complete.
     * @note server handles request task id and true is passed into the .updateTask();
     */
    onComplete(id: String) {
        this.api.updateTask(id, true).subscribe(() => { // Update selected task to 'isComplete = true'
            this.ngOnInit();
        });
    } // End Function

    /**
     * @title Updates Priority
     * @desc updates a selected tasks priority.
     * @note server handles request task id and updated value is passed into the .updatePriority() in post service.
     */
    onUpdate(id: String, priority: Number) {
        this.api.updatePriority(id, priority).subscribe(() => {
            this.ngOnInit();
        });
    }// End Function

    ngOnInit() {
        const todayDate = new Date(); // Get current date

        this.api.getTodayTask(todayDate.toDateString()).subscribe(data => {
            this.tasks = data; // API JSON data received from the server passed into tasks array
        });
    }// End function
}// End Class
