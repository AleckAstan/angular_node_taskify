import { Component } from "@angular/core";
import { CreateComponent } from "./create/create.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Taskify";

  constructor(private createCon: CreateComponent) {}

  openDialog() {
    this.createCon.openDialog();
  }
} // End AppComponent Class
