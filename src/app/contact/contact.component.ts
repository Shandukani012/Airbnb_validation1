import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../user/profile/validation';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
   message: new FormControl(''),
    email: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;
  constructor(private http:HttpClient, private formBuilder: FormBuilder,private router:Router) { 

  }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        message: [
          '',
          [
            Validators.required,
           Validators.minLength(10),
           Validators.maxLength(250)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        
        acceptTerms: [false, Validators.requiredTrue]
      },
      
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    //console.log(" ")
   // if (this.form.invalid) {
      //console.log("");
      //return;
   // }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onsend(data:any){

    
    //Add the contact to the Database
    this.http.post('http://localhost:3000/message',data, {responseType:'text'})
    .subscribe((results)=>{

      if(results == 'success'){

        this.router.navigate(['login'])
        alert("Message send.")
        
        console.warn(results)
       }
       else{
        alert(results)
        console.warn(results)
       }

      })
    }

  }

