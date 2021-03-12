import { Component } from "@angular/core";
import { COURSES } from "../db-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  showOrHide: boolean = true;
  count: number = 0;
  log: number[] = [];
  onClick() {
    this.showOrHide = !this.showOrHide;
    this.log.push(this.count++);
  }
}
