import * as _ from 'lodash';
import * as authActions from '../../store/auth/actions/auth.actions';
import * as authSelectors from '../../store/auth/selectors/auth.selectors';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AuthState } from '../../store/auth/reducers/auth.reducer';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Store } from '@ngrx/store';
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
export class UserImagesComponent implements OnInit,OnDestroy {
  userName!: string;
  displayedColumns: string[] = ['userName', 'imageUrl', 'createdAt', 'updatedAt'];
  dataSource: UserImage[] = [];
  ngDestroyed$ = new Subject();
  
  constructor(private dialog: MatDialog,private authStore : Store<AuthState>) {}
  ngOnInit(): void {
        this.authStore
        .select(authSelectors.selectAuthState)
        .pipe(
          takeUntil(this.ngDestroyed$)
        )
        .subscribe((response)=>{
          if(response) {
              if(response.user?.name){
                this.userName = _.cloneDeep(response.user?.name);   
              }
          }
        })
  }
  ngOnDestroy(): void {
   
  }

  openUploadDialog(): void {
    this.dialog.open(UploadImageDialogComponent, {
      width: '400px',
    });
  }
}
