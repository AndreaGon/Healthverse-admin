import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-new-post-dialog',
  templateUrl: './new-post-dialog.component.html',
  styleUrls: ['./new-post-dialog.component.sass']
})
export class NewPostDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewPostDialogComponent>,
    private adminService: AdminService
  ) {}

  contentForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  });

  ngOnInit(): void {}

  cancelAction() {}

  postContent() {
    this.adminService.addNewData(this.contentForm);
    this.dialogRef.close();
  }
}
