import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {

  data = [
    { name: 'ali', age: 24, job: 'designer' },
    { name: 'reza', age: 21, job: 'engineer' },
    { name: 'sara', age: 18, job: 'ui' },
  ];

  header = [
    { key: 'name', value: 'Name' },
    { key: 'age', value: 'Age' },
    { key: 'job', value: 'Job' },
  ]

}
