import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UploadImageDialogComponent } from '../upload-image-dialog/upload-image-dialog.component';

interface UserImage {
  userName: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
@Component({
  selector: 'app-user-images',
  imports: [ 
    MatTableModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './user-images.component.html',
  styleUrl: './user-images.component.scss'
})
export class UserImagesComponent {
  userName: string = 'John Doe'; // Se asignará dinámicamente
  displayedColumns: string[] = ['userName', 'imageUrl', 'createdAt', 'updatedAt'];
  dataSource: UserImage[] = [
    {
      userName: 'John Doe',
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userName: 'Jane Smith',
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  constructor(private dialog: MatDialog) {}

  openUploadDialog(): void {
    this.dialog.open(UploadImageDialogComponent, {
      width: '400px',
    });
  }
}
