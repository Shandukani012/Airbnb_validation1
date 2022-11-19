import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BnbService {

  constructor(private http:HttpClient) { }

  baseUrlRegister = "http://localhost:3000/register"
  baseUrlLogin = "http://localhost:3000/login"
  baseUrlMessage = "http://localhost:3000/message"
  baseUrlRoom = "http://localhost:3000/rooms"
  baseUrlRoomById = "http://localhost:3000/rooms/"
  baseUrlBook= "http://localhost:3000/books"
  baseUrlBookId = "http://localhost:3000/books/"
  baseUrlMakeBook = "http://localhost:3000/makeBooking/"
  baseUrlArchive = "http://localhost:3000/archiveBooking"
  baseUrlGetoneBook = "http://localhost:3000/viewbook/"

  baseUrlupdateDate = "http://localhost:3000/updateDate/"
  create(data: any) {
    return this.http.post(this.baseUrlRegister, data);
  }

  login(data: any){
    return this.http.post(this.baseUrlLogin, data);
  }


  message(data: any){
    return this.http.post(this.baseUrlMessage, data);
  }

  rooms(data: any){
    return this.http.get(this.baseUrlRoom, data);
  }

  book(data: any){
    return this.http.get(this.baseUrlBook, data);
  }


  currentRoom(id: any){
    return this.http.get(this.baseUrlRoomById+id);
  }
  currentbook(id: any){
    return this.http.get(this.baseUrlBookId+id);
  }
  books(id: any){
    return this.http.get(this.baseUrlMakeBook+id);
  }

  archiveBooking(id:any){
    return this.http.put(`${this.baseUrlArchive}/${id}`, {});
  }
  viewbook(id: any){
    return this.http.get(this.baseUrlGetoneBook+id);
  }

  updateDate(id:any,data:any){
    return this.http.put(`${this.baseUrlupdateDate}/${id}`, {data});
  }
}