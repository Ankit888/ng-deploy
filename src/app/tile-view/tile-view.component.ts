import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tile-view',
  templateUrl: './tile-view.component.html',
  styleUrls: ['./tile-view.component.scss']
})
export class TileViewComponent implements OnInit {

  students: any[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/detail', id]);
  }

  editStudent(student: any): void {
    // Logic to edit the student
    console.log('Editing student:', student);
  }

  flagStudent(student: any): void {
    // Logic to flag the student
    console.log('Flagging student:', student);
  }

  deleteStudent(student: any): void {
    // Logic to delete the student
    console.log('Deleting student:', student);
  }

}
