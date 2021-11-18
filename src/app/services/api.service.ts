import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../task.model';

/**
 * @title Api Service
 * @desc this service is used for handling requests from apps components to the server @localhost:8081.
 * Function implemented:
 *
 *     - getTasksData(boolean) - gets all tasks from the server. Take one parameter for task being 'uncompleted' or 'complete'
 *     - getTask(String) -  get a task by its ID from the server.
 *     - addTask(String, String, Number, String, Boolean) - post a newly created task to the server.
 *     - editTask(String, String, Number, String, Boolean) - put a edited task data to the server.
 *     - deleteTask(String) - delete request by task id to the server.
 *     - updateTask(String, boolean) - put request for a updated task. Takes two parameters, task id and isComplete.
 *     - updateNote(String, String) - put request to update a note for a selected task. Takes two parameters, task id and note.
 *     - updatePriority(String, Number) - put request to update the priority of a selected task. Takes two parameters,
 *     tasks id and priority.
 *     - getTodayTask(String) - get request to get tasks for the current date(today's date). Takes one perimeter, todaysDate.
 *
 * @note Used imports:
 *    - import { Task } // Model
 */

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    /**
     * @title Get tasks data.
     * @desc gets all tasks data from the database.
     * @note passes a Boolean, server takes care of the request
     */
    getTasksData(isComplete: Boolean): Observable<any> {
        // Connect to server URL here and GET JSON DATA
        return this.http.get('http://localhost:8081/api/tasks/' + isComplete);
    }

    /**
     * @title Get a task for editing tasks.
     * @desc gets a tasks data from the database, this will be used when pulling task into edit component.
     * @note passes a String, Server takes care of the request.
     */
    getTask(id: String): Observable<any> {
        return this.http.get('http://localhost:8081/api/tasks/edit/' + id);
    }

    /**
     * @title Adds a tasks.
     * @desc adds a task from the application create page.
     * @note passes Strings and a Boolean, Server takes care of the request and data.
     */
    addTask(task_name: String, note: String, priority: Number, date: String, isComplete: Boolean): Observable<any> {
        const task: Task = {task_name: task_name, note: note, priority: priority, date: date, isComplete: isComplete};
        return this.http.post('http://localhost:8081/api/tasks', task);
    }

    /**
     * @title Updates a task
     * @desc updates a selected tasks data.
     * @note passes String and a boolean, Server takes care of the request.
     */
    editTask(id: String, task_name: String, note: String, priority: Number, date: String, isComplete: Boolean): Observable<any> {
        const task: Task = {task_name: task_name, note: note, priority: priority, date: date, isComplete: isComplete};
        return this.http.put('http://localhost:8081/api/tasks/edit/' + id, task);
    }

    /**
     * @title Deletes a task
     * @desc deletes a selected tasks from the database.
     * @note passes String, Server takes care of the request.
     */
    deleteTask(id: String): Observable<any> {
        return this.http.delete('http://localhost:8081/api/tasks/' + id);
    }

    /**
     * @title Updates a task
     * @desc updates a selected tasks in the database.
     * @note passes String and a boolean, Server takes care of the request.
     */
    updateTask(id: String, isComplete: Boolean): Observable<any> {
        const isComp = {isComplete}; // Need to pass as a object for the req.body
        return this.http.put('http://localhost:8081/api/tasks/update/' + id, isComp);
    }

    /**
     * @title Updates a note in a task
     * @desc updates a selected tasks note in the database.
     * @note passes 2 Strings, Server takes care of the request.
     */
    updateNote(id: String, note: String): Observable<any> {
        const updateNote = {note};
        return this.http.put('http://localhost:8081/api/tasks/update/note/' + id, updateNote);
    }

    /**
     * @title Updates a note in a task
     * @desc updates a selected tasks priority in the database.
     * @note passes 1 Strings & a number, Server takes care of the request.
     */
    updatePriority(id: String, priority: Number): Observable<any> {
        const updatePriority = {priority};
        return this.http.put('http://localhost:8081/api/tasks/update/priority/' + id, updatePriority);
    }

    /**
     * @title Gets current date tasks
     * @desc gets all tasks for the current date.
     * @note passes 1 String with current date, Server takes care of the request.
     */
    getTodayTask(todaysDate: String): Observable<any> {
        return this.http.get('http://localhost:8081/api/tasks/today/' + todaysDate);
    }// End Function
}// End class
