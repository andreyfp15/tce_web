import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adm-category',
  templateUrl: './adm-category.component.html',
  styleUrls: ['./adm-category.component.css']
})
export class AdmCategoryComponent implements OnInit {

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

