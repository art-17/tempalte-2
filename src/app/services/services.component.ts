import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllPlansComponent } from '../all-plans/all-plans.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  openPlans() {
    const dialogRef = this.dialog.open(AllPlansComponent, { 
      maxHeight: '100vh',
      height: '100%',
      panelClass: 'my-class'
    });
  }

  ngOnInit(): void {
  }

}
