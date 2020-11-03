import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing';
  randomText: string = lorem.sentence(5);
  enteredText = '';
  success: boolean;

  onInput(value: string) {
    this.enteredText = value;
  }
}
