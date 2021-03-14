import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adm-text',
  templateUrl: './adm-text.component.html',
  styleUrls: ['./adm-text.component.css']
})
export class AdmTextComponent implements OnInit {

  TypeModalOperation = 0;

  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  openModalCreate(operation: any) {
    this.TypeModalOperation = 1;
    this.modal.open(operation, { size: 'lg' });
  }

  openModalEdit(operation: any, id : number) {
    this.TypeModalOperation = 2;
    this.modal.open(operation, { size: 'lg' });
  }

}
