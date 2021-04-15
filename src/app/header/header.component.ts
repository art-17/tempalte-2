import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(LoginModalComponent, { 
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    });
  }

  ngOnInit(): void {
  }
  
}
