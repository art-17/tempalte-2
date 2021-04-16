import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-all-plans',
  templateUrl: './all-plans.component.html',
  styleUrls: ['./all-plans.component.css']
})
export class AllPlansComponent implements OnInit {
 
  expertBlockInner : boolean = false;
  automatedBlockInner : boolean = false;
  constructor(public dialogRef: MatDialogRef<AllPlansComponent>) { }

  ngOnInit(): void {
    this.dialogRef.updatePosition({

    right: `0`});
  }
  openExpertBlockInner(){
    this.expertBlockInner = true;
    this.automatedBlockInner = false;
  }

  openAutomatedBlockInner(){
 
    this.automatedBlockInner = true;
    this.expertBlockInner = false;
  }
}
