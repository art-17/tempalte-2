import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllPlansComponent } from '../all-plans/all-plans.component';
import { VideoPopupComponent } from '../video-popup/video-popup.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  expertBlockInner : boolean = false;
  automatedBlockInner : boolean = false;
closeResult = '';
  constructor(private dialog: MatDialog, private modalService: NgbModal) { }
  openPlans() {
    const dialogRef = this.dialog.open(AllPlansComponent, { 
      maxWidth: '100vh',
      maxHeight: '100vh',
      height: '100%',
      width: '1500px',
      panelClass: 'my-class'
    });
  }

  openVideo(){
    this.dialog.open(VideoPopupComponent, {
      width: '800px',
      height: '800px',
      panelClass: 'myVideo'
    });
  }
  
  ngOnInit(): void {
    
  }

  open(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      windowClass: 'custom-class animated fadeInRight'
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
