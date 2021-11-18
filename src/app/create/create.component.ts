import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {MatDialog} from '@angular/material/dialog';
import {NgForm} from '@angular/forms';


/**
 * @title Create Task
 * @desc this component allows the user create a task and save it onto the database.
 * @note this component reads in note data from 'view.component' it is read in from
 * imported interface:
 *     - import { DialogData }
 * With the usage of:
 *     - import { MatDialog, MatDialogRef, MAT_DIALOG_DATA }
 * Tasks are saved to a database which is handled by backend server.
 */

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    tasks: any = []; // Array used for locally storing contacts

    constructor(private api: ApiService, public dialog: MatDialog) {
    }

    /**
     * @title Add new task
     * @desc this function allows the user submit the fill out task form to the database.
     * It passes the form data into Api.addTask() function which then passes it to
     * the server.
     * @note
     * */
    onAddTask(form: NgForm) {
        const dateString = form.value.date.toDateString(); // Format date

        this.api.addTask(form.value.task_name, form.value.note, form.value.priority, dateString, false).subscribe(() => {
            location.reload(true); // Reload the page
        });

        console.log(form.value);
        form.resetForm(); // Reset the form
        this.closeDialog(); // Close add task Dialog box
    }// End function

    /**
     * @title Open Create task CreateComponent dialog
     * @desc Function used to open up a popout dialog box to display the create form from create.component
     * Used imports:
     *      - import { MatDialog }
     *      - import { CreateComponent }
     */
    openDialog() {
        const dialogRef = this.dialog.open(CreateComponent); // Display CreateComponent inside dialog box.

        dialogRef.afterClosed().subscribe(result => { // Close and log the results
            console.log(`Dialog result: ${result}`);
        });
    }// End function

    /**
     * @title Close Create task CreateComponent dialog
     * @desc Function used to close popout dialog box that display the create form from create.component
     * Used imports:
     *      - import { MatDialog }
     *      - import { CreateComponent }
     */
    closeDialog() {
        this.dialog.closeAll();
    }// End closeDialog function for add task

    ngOnInit() {
    }

}// End class
