import { Component, OnInit } from '@angular/core';
import { BnbService } from 'src/app/service/bnb.service';

@Component({
  selector: 'app-bookingview',
  templateUrl: './bookingview.component.html',
  styleUrls: ['./bookingview.component.scss']
})
export class BookingviewComponent implements OnInit {

  Books:any;
  
    constructor(private bnbservice:BnbService) { }
  
    ngOnInit(): void {
  
    let id=localStorage.getItem('booking_id');
  
    this.bnbservice.viewbook(id).subscribe((data)=>{
     this.Books= data;
     console.log(this.Books)
  
     })
    }

}


