import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-image-dialog',
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './upload-image-dialog.component.html',
  styleUrl: './upload-image-dialog.component.scss'
})
export class UploadImageDialogComponent {
  fileName: string | null = null;

  constructor(private dialogRef: MatDialogRef<UploadImageDialogComponent>) {}

  onFileDropped(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      this.fileName = file.name;
    }
  }

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files?.length) {
      this.fileName = target.files[0].name;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
