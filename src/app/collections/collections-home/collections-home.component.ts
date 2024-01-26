import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {

  data = [
    { name: 'ali', age: 24, job: 'designer', employed: true },
    { name: 'reza', age: 21, job: 'engineer', employed: true },
    { name: 'sara', age: 18, job: 'ui', employed: false },
  ];

  headers = [
    { key: 'name', value: 'Name', show: true },
    { key: 'age', value: 'Age', show: true },
    { key: 'job', value: 'Job', show: false },
    { key: 'employed', value: 'Employed', show: true }
  ]

}
