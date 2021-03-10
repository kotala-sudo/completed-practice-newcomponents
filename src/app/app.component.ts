import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  csci160 = COURSES[0];
  csci161 = COURSES[1];
  csci213 = COURSES[2];
}
