import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  display: BnbService | undefined;
  constructor(private route: Router,private service:BnbService) { }
  tittle:any;
  data1:any;
 
  ngOnInit(): void {


    this.tittle = localStorage.getItem("token");
    this.service = JSON.parse(this.tittle);
    // this.display = this.service
    console.log(this.tittle)
  }


 

  onClick(){
    console.log('we are logging out')
    localStorage.removeItem("token");
    this.route.navigate(['/'])
  }

}
