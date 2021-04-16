import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { LoginModalComponent } from '../login-modal/login-modal.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  // closeResult = '';
  constructor(private dialog: MatDialog, private modalService: NgbModal) { }
  openDialog() {
    // const dialogRef = this.dialog.open(LoginModalComponent, { 
    //   maxWidth: '100vw',
    //   maxHeight: '100vh',
    //   height: '100%',
    //   width: '100%'
    
    // });

    const dialogRef = this.dialog.open(LoginModalComponent,{
      panelClass: ['animate__animated','animate__slideInLeft'],
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    }); 
  }

  ngOnInit(): void {
  }
  // open(content) {
  //   this.modalService.open(content, {
  //     ariaLabelledBy: 'modal-basic-title',
  //     windowClass: 'custom-class'
  //   }).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}
