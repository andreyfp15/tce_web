import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  testUiSwitch:boolean;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  selectCategory(){
    this.router.navigateByUrl('text');
  }

}
