import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {
  data = [
    { value: 22, name: 'users' },
    { value: 55, name: 'views' },
    { value: 10, name: 'comment' }
  ]
}
