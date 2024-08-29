import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  students = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    // Add more students as needed
  ];

  displayedColumns: string[] = ['name', 'email', 'edit'];

  constructor() { }

  ngOnInit(): void {
  }

  editStudent(student: any): void {
    // Implement the edit logic here
    console.log('Editing student:', student);
  }
}


