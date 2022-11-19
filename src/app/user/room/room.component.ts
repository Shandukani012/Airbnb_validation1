import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
   info:any;
   inf=[];

  constructor( private bnbService:BnbService,private router:Router) { }

  ngOnInit(): void {
   this.bnbService.rooms(this.info).subscribe(res=>{


    this.info=res;
    this.inf=this.info.data;
console.log(res);

   })

  }

  viewroom(items:any)
  {

   console.log(items.room_id);
   this.router.navigate(['/roombookin']);
   localStorage.setItem('room_id',items.room_id);



  }  

}
