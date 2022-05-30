import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewPostDialogComponent } from '../../components/new-post-dialog/new-post-dialog.component';

@Component({
  selector: 'app-healthtips',
  templateUrl: './healthtips.component.html',
  styleUrls: ['./healthtips.component.sass']
})
export class HealthtipsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNewPostDialog(): void{
    const dialogRef = this.dialog.open(NewPostDialogComponent, {
      width: '450px'
    })
  }

}
