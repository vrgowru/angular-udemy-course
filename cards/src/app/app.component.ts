import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [{
    title: 'Neat Tree', imageUrl: '../assets/oak-tree-sunset-iStock-477164218-1080x608.jpg',
    username: 'nature', content: 'I saw this neat tree today'
  },
  {
    title: 'Snowy Mountain', imageUrl: '../assets/mountain-range-appenzell-switzerland.jpg',
    username: 'mountainlover', content: 'Here is a picutre of a snowy mountain'
  },
  {
    title: 'Mountain Biking', imageUrl: '../assets/biking.jpg',
    username: 'biking2222', content: 'I did some biking today'
  }];
}
