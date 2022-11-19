import { Component, OnInit } from '@angular/core';
import { BnbService } from 'src/app/service/bnb.service';

@Component({
  selector: 'app-roombookin',
  templateUrl: './roombookin.component.html',
  styleUrls: ['./roombookin.component.scss']
})
export class RoombookinComponent implements OnInit {


Rooms:any;

  constructor(private bnbservice:BnbService) { }

  ngOnInit(): void {

  let id=localStorage.getItem('room_id');

  this.bnbservice.currentRoom(id).subscribe((data)=>{
   this.Rooms= data;
   console.log(this.Rooms)

   })
  }

}
