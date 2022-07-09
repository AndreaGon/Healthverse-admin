import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/core/services/admin.service';
import { NewPostDialogComponent } from '../../components/new-post-dialog/new-post-dialog.component';

@Component({
  selector: 'app-healthtips',
  templateUrl: './healthtips.component.html',
  styleUrls: ['./healthtips.component.sass']
})
export class HealthtipsComponent implements OnInit {
  adminData: any;

  constructor(public dialog: MatDialog, private admin: AdminService) {}

  ngOnInit(): void {
    this.admin.getAll()?.subscribe((res) => {
      this.adminData = res;
    });
  }

  openNewPostDialog(): void {
    const dialogRef = this.dialog.open(NewPostDialogComponent, {
      width: '450px'
    });
  }
}
