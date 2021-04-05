import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  navegate(page : string){

    if(page == "MODALUSER"){
      
    }

    if(page == "LOGOUT"){
      this.router.navigateByUrl('/');
      return;
    }

    this.router.navigateByUrl(page);
  }

}
